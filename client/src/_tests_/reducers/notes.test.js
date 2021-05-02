import notesReducer from '../../reducers/notes';
import notes from '../fixtures/notes';
import moment from 'moment';

test('should set default state', () => {
    const state = notesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([])
})

test('should remove note by id', () => {
    const action = {
        type: 'REMOVE_NOTE',
        id: notes[1].id
    };
    const state = notesReducer(notes, action);
    expect(state).toEqual([notes[0], notes[2]])
})

test('should not remove note if id not found', () => {
    const action = {
        type: 'REMOVE_NOTE',
        id: 234345
    };
    const state = notesReducer(notes, action);
    expect(state).toEqual(notes)
})

test('should add note', () => {
    const newNote = {
        id: 4,
        topic: 'jest-test',
        description: 'how to test you application',
        note: 'very useful',
        reference: 'youtube tutorial',
        tag: 'jest-test',
        status: 'in progress',
        createdAt: moment(0).add(5, 'days').valueOf()
    }
    const action = {
        type: 'ADD_NOTE',
        note: newNote
    }
    const state = notesReducer(notes, action);
    expect(state).toEqual([...notes, newNote])
})

test('should edit expense', () => {
    const newNote = 'the redux is a very difficult topic, you should practice it more';
    const action = {
        type: 'UPDATE_NOTE',
        id: notes[2].id,
        updates: {
            newNote
        }
    };
    const state = notesReducer(notes, action);
    expect(state).toEqual([notes[0], notes[1], { ...notes[2], ...action.updates }])
})

test('should not edit expense if id is not found', () => {
    const newNote = 'the redux is a very difficult topic, you should practice it more';
    const action = {
        type: 'UPDATE_NOTE',
        id: '4',
        updates: {
            newNote
        }
    };
    const state = notesReducer(notes, action);
    expect(state).toEqual(notes)
})

test('should change status to mastered if current status is progress', () => {
    const action = {
        type: 'UPDATE_STATUS',
        id: '2'
    };
    const state = notesReducer(notes, action);
    expect(state).toEqual([notes[0], { ...notes[1], status: 'mastered' }, notes[2]])
})

test('should change status to in progress if current status is mastered', () => {
    const action = {
        type: 'UPDATE_STATUS',
        id: '1'
    };
    const state = notesReducer(notes, action);
    expect(state).toEqual([{ ...notes[0], status: 'in progress' }, notes[1], notes[2]])
})