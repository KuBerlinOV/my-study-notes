import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_NOTE
const addNote = ({ topic = '', // in this case you should imagine destructuring as you are passing some object with the same data like ' const movie = {title, year, id} '
    description = '',           //when we are passing it to the action function as an argument and destructuring it. 
    note = '',                 //when it would be like ' const {title, year, id} = movie ' 
    reference = '',          //Furthermore, we provide here the default values for the object keys so
    tag = '',                //the user could leave these options empty if he wanted to.
    status = '',
    createdAt = 0
} = {}) => {
    return {
        type: 'ADD_NOTE',
        note: {
            id: uuid(),
            topic,
            description,
            note,
            reference,
            tag,
            status,
            createdAt
        }
    }
}

//EDIT_NOTE

const updateNote = (id, updates) => ({
    type: 'UPDATE_NOTE',
    id,
    updates
})

//REMOVE_NOTE

const removeNote = (id) => ({
    type: 'REMOVE_NOTE',
    id
})

//SET_TEXT_FILTER

const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
})

//SORT_BY_DATE

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

//Sort by status

// const sortByStatus = () => ({
//     type: 'SORT_BY_STATUS'
// })

// //setStatusAll

// const setStatusFilter = (status) => ({
//     type: 'SET_STATUS_ALL',
//     status
// })

// //setStatusCurrent

// const setStatusCurrent = (id) => ({
//     type: 'SET_STATUS_CURRENT',
//     id
// })

// //setStatusFinished

// const setStatusFinished = (id) => ({
//     type: 'SET_STATUS_FINISHED',
//     id
// })


//setStartDate

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

//setEndDate

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})




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
        // case 'SET_STATUS_CURRENT':
        //     return state.map(note => {
        //         if (note.id === action.id) {
        //             return {
        //                 ...note,
        //                 status: 'current'
        //             }
        //         }
        //     });
        // case 'SET_STATUS_FINISHED':
        //     return state.map(note => {
        //         if (note.id === action.id) {
        //             return {
        //                 ...note,
        //                 status: 'finished'
        //             }
        //         }
        //     });
        default:
            return state;
    }

}


//reducers = filter
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
    status: 'all'
}

const filtersReducer = (state = notesReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date',
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        // case 'SET_STATUS_FILTER':
        //     return {
        //         ...state,
        //         status: status
        //     };
        default:
            return state;
    }

}






const store = createStore(combineReducers({
    notes: notesReducer,
    filters: filtersReducer
}))




store.dispatch(addNote({ topic: 'React-redux' }))

store.dispatch(updateNote(note.id, { status: 'finished' }))

store.dispatch(removeNote(id))

store.dispatch(setTextFilter('text'))

store.dispatch(sortByDate())

store.dispatch(setStartDate(1235))

store.dispatch(setEndDate(45467))

store.dispatch(sortByStatus())

store.dispatch(setStatusAll())

store.dispatch(setStatusCurrent())

store.dispatch(setStatusFinished())

const getVisibleNotes = (notes, { text, sortBy, startDate, endDate, status }) => {
    return notes.filter(note => {
        const descriptionToMatch = note.description.toLowerCase()
        const topicToMatch = note.topic.toLowerCase();
        const textToMatch = text.toLowerCase();

        const textMatch = descriptionToMatch.includes(textToMatch) || topicToMatch.includes(textToMatch) ? true : false;
        const startDateMatch = typeof startDate !== 'number' || note.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || note.createdAt <= endDate;

        return textMatch && startDateMatch && endDateMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            a.createdAt < b.createdAt ? 1 : -1
        }
    })
}

store.subscribe(() => {
    const state = store.getState();
    const visibleNotes = getVisibleNotes(state.notes, state.filters)
})


const testState = {
    notes: [{
        id: 'sdfdg',
        topic: 'learning redux',
        description: 'this is a note about how to organize redux',
        note: 'this is a text about how redux works',
        reference: 'this is a reference to a resource, visual tutorial or book',
        tag: 'this is a tag',
        status: 'current', //finished 
        createdAt: 0,
    }],
    filters: {
        text: 'react-redux',
        sortBy: 'date', //status
        startDate: undefined,
        endDate: undefined
    }
}