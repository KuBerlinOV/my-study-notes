import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

//import-reducers
import notesReducer from '../reducers/notes';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
//import middleware
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore = () => {
    const store = createStore(combineReducers({
        notes: notesReducer,
        filters: filtersReducer,
        auth: authReducer
    }),
        compose(
            composeEnhancers(applyMiddleware(thunk)),
        )

    );
    return store
};

export default configureStore;