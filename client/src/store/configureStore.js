import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
//import middleware
import thunk from 'redux-thunk';
//import-reducers
import notesReducer from '../reducers/notes';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import librariesReducer from '../reducers/libraries';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore = () => {
    const store = createStore(combineReducers({
        notes: notesReducer,
        filters: filtersReducer,
        libraries: librariesReducer,
        auth: authReducer,
    }),
        compose(
            composeEnhancers(applyMiddleware(thunk)),
        )

    );
    return store
};

export default configureStore;