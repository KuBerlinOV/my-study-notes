import { addNote, removeNote, updateNote } from '../../actions/notes';

test('should set up remove note action object', () => {
    const action = removeNote('1234gv');

    expect(action).toEqual({
        type: 'REMOVE_NOTE',
        id: '1234gv'
    })
})

test('should set up update note', () => {
    const action = updateNote('1432dg', { note: 'note', topic: 'newtopic' })

    expect(action).toEqual({
        type: 'UPDATE_NOTE',
        id: '1432dg',
        updates: { note: 'note', topic: 'newtopic' }
    })
})

test('shoud set app add note action', () => {
    const noteData = {
        topic: 'testing',
        description: 'learning how to test your applications',
        note: 'this is a very useful skill',
        reference: "",
        status: "in progress",
        tag: "#",
        createdAt: 7000
    }
    const action = addNote(noteData)

    expect(action).toEqual({
        type: 'ADD_NOTE',
        note: {
            ...noteData,
            id: expect.any(String)
        }
    })
})


test('shoud set app add note action with default note', () => {

    const action = addNote();
    expect(action).toEqual({
        type: 'ADD_NOTE',
        note: {
            topic: '',
            description: '',
            note: '',
            reference: "",
            status: "in progress",
            tag: "#",
            createdAt: 0,
            id: expect.any(String)
        }
    })
})