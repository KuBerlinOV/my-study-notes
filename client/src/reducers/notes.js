//reducers = notes
const notesReducerDefaultState = []

const notesReducer = (state = notesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [...state, action.note];
        case 'UPDATE_NOTE':
            return state.map(note => {
                if (note.id === action.id) {
                    return {
                        ...note,
                        ...action.updates
                    }
                } else {
                    return note
                }
            });
        case 'REMOVE_NOTE':
            return state.filter(({ id }) => id !== action.id);
        case 'UPDATE_STATUS':
            return state.map(note => {
                if (note.id === action.id && note.status === 'in progress') {
                    return {
                        ...note,
                        status: 'mastered'
                    }
                } else if (note.id === action.id && note.status === 'mastered') {
                    return {
                        ...note,
                        status: 'in progress'
                    }
                } else {
                    return note
                }
            })
        default:
            return state;
    }

}

export default notesReducer;
