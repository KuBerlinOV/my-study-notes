import { addNote, removeNote, updateNote, startAddNote, setNotes, startSetNotes } from '../../actions/notes';
import notes from '../fixtures/notes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { database } from '../../firebase/firebase';

const createStore = configureMockStore([thunk])

beforeEach((done) => {
    //creating data  for test database, we taking it from notes fixture, pushing it to notesData 
    //in the similar data structure as in the firebase and then sending this data to firebase test database
    const notesData = {};
    notes.forEach(({ id, topic, description, text, reference, status, tag, createdAt }) => {
        notesData[id] = { topic, description, text, reference, status, tag, createdAt }
    })
    //we need then with method done, in order to make sure that the test won't fire until the firebase will sync up the data
    database.ref('notes').set(notesData).then(() => { done() })
})

test('should set up remove note action object', () => {
    const action = removeNote('1234gv');

    expect(action).toEqual({
        type: 'REMOVE_NOTE',
        id: '1234gv'
    })
});

test('should set up update note', () => {
    const action = updateNote('1432dg', { note: 'note', topic: 'newtopic' })

    expect(action).toEqual({
        type: 'UPDATE_NOTE',
        id: '1432dg',
        updates: { note: 'note', topic: 'newtopic' }
    })
});

test('shoud set app add note action', () => {
    const action = addNote(notes[2])

    expect(action).toEqual({
        type: 'ADD_NOTE',
        note: notes[2]
    })
});



// testing redux ansynchronous actions
// had to jest.setTimeout otherwise exceeds the standard timeout

test('should add note to database and store', (done) => {
    const store = createStore({});
    const noteData = {
        topic: 'redux-mock-store',
        description: 'used to test store',
        text: 'must know test',
        reference: '',
        status: 'in progress',
        tag: '#',
        createdAt: 0
    }
    //dispatching action to the store with the noteData
    store.dispatch(startAddNote(noteData)).then(() => {
        //getting that all the actions from the store in the a form of array
        const actions = store.getActions();
        //checking if the action was dispatched with the correct data
        expect(actions[0]).toEqual({
            type: 'ADD_NOTE',
            note: {
                id: expect.any(String),
                ...noteData
            }
        });
        return database.ref(`notes/${actions[0].note.id}`).once('value')
        //checking if the note was actually added to database, by pulling it back form database and comparing to test noteData

        //done is needed to make sure that the asynchronous dispatch action will not wait forever
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(noteData);
        done();
    })
});






test('should add note with default values to database and store', (done) => {

    const store = createStore({});
    const defaultNoteData = {
        topic: '',
        description: '',
        text: '',
        reference: '',
        status: 'in progress',
        tag: '#',
        createdAt: 0
    }
    //dispatching action to the store with the noteData
    store.dispatch(startAddNote(defaultNoteData)).then(() => {
        //getting that all the actions from the store in the a form of array
        const actions = store.getActions();
        //checking if the action was dispatched with the correct data
        expect(actions[0]).toEqual({
            type: 'ADD_NOTE',
            note: {
                id: expect.any(String),
                ...defaultNoteData
            }
        });
        //checking if the note was actually added to database, by pulling it back form database and comparing to test noteData
        return database.ref(`notes/${actions[0].note.id}`).once('value')
        //done is needed to make sure that the asynchronous dispatch action will not wait forever
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultNoteData);
        done();
    })
})


test('should setup set notes action object with data', () => {
    const action = setNotes(notes);
    expect(action).toEqual({
        type: 'SET_NOTES',
        notes
    })
});

test('should fetch notes from the firebase', (done) => {
    const store = createStore({});
    store.dispatch(startSetNotes()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            //the type here is SET_NOTES because in the end  this is what this functions returns and dispatches 
            type: 'SET_NOTES',
            notes
        });
        done();
    })
})