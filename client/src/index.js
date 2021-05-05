import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { startSetNotes } from './actions/notes';
// import './firebase/firebase'

import AppRouter from './routers/approuter';

import configureStore from './store/configureStore';



const store = configureStore();

// const state = store.getState();
// const visibleNotes = getVisibleNotes(state.notes, state.filters);

// console.log(visibleNotes)


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(
  <p>loading...</p>,
  document.getElementById('root')
);

store.dispatch(startSetNotes()).then(() => {
  ReactDOM.render(
    jsx,
    document.getElementById('root')
  );
})




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
