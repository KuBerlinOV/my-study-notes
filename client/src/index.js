import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss'
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
    //It is important to dispatch the login action here, redux local store would from the very beginning had this 
    //state being set up. If we would, for example dispatch it together with the action startLogin when clicking 
    //on the button the user would have to login every time when revisiting the page even though he never logged out
    console.log(history)
    store.dispatch(login(user.uid))
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

