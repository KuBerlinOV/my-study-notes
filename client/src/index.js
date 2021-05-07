import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { startSetNotes } from './actions/notes';
import { login, logout } from './actions/auth';

import { firebase } from './firebase/firebase';

import AppRouter, { history } from './routers/approuter';

import configureStore from './store/configureStore';



const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false;


//this function is needed in order not to re-render the whole application when the user is already logged in 
//and then logged out and other way around. In other words, when we first visit the page,
//the app is rendered, but without fetching the data from database. So when we login, we only fetch the data and getting redirected to the homepage
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      jsx,
      document.getElementById('root')
    )
    hasRendered = true
  }
}

ReactDOM.render(
  <p>loading...</p>,
  document.getElementById('root')
);

// store.dispatch(startSetNotes()).then(() => {
//   ReactDOM.render(
//     jsx,
//     document.getElementById('root')
//   )
// })

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     console.log('login')
//   } else {
//     history.push('/')
//     console.log('logout')
//   }
// })


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(history)
    store.dispatch(login(user.uid))
    console.log(user.uid)
    store.dispatch(startSetNotes()).then(() => {
      if (history.location.pathname == '/') {
        history.push('/home')
      }
      renderApp();
    })
  } else {
    store.dispatch(logout())
    renderApp();
    history.push('/')
  }
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
