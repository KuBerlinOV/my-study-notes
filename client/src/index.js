import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'


import AppRouter from './routers/approuter';

import { addNote, removeNote, updateNote } from './actions/notes';




import { setTextFilter, sortByDate, setStartDate, setEndDate } from './actions/filters'

import configureStore from './store/configureStore';

import selectNotes from './selectors/notes';


const store = configureStore();

store.dispatch(addNote({ topic: 'React js', description: 'how to use react', note: 'this is the code', createdAt: 1619073717 }))
store.dispatch(addNote({ topic: 'Redux', description: 'how to connect Redux to react', note: 'this is the code that you can use', createdAt: 1619073707 }))
store.dispatch(addNote({ topic: 'node.js', description: 'how to connect node.js to the react', note: 'this is the code', createdAt: 1619073720 }))

// const state = store.getState();
// const visibleNotes = getVisibleNotes(state.notes, state.filters);

// console.log(visibleNotes)


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(
  jsx,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
