import { createStore, combineReducers } from 'redux';

//import-reducers
import notesReducer from '../reducers/notes';
import filtersReducer from '../reducers/filters';
import stylesReducer from '../reducers/styles'

const configureStore = () => {
    const store = createStore(combineReducers({
        notes: notesReducer,
        filters: filtersReducer,
        styles: stylesReducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    return store
}

export default configureStore;