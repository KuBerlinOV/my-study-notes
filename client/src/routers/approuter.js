import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from '../App';
import About from '../components/About';
import NotFoundPage from '../components/NotFoundPage';
import MyLibraries from '../components/MyLibraries';
import Notes from '../components/Notes';
import EditNote from '../components/EditNote'
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Header from '../components/Header';
import AddLibrary from '../components/AddLibrary';
import EditLibrary from '../components/EditLibrary';
import Library from '../components/Library';
import AddNote from '../components/AddNote';
import LibrariesList from '../components/LibrariesList';

//this npm history is needed in order to be able to access the history outside of the context of this 
//component, which is in the index.js file where we redirect users. See note in the index.js file
export const history = createBrowserHistory();

const AppRouter = () => {
    return (
        <Router history={history} >
            <div className='main-approuter'>
                <Header />
                <Switch>
                    <PublicRoute path='/' component={LoginPage} exact={true} />
                    <PrivateRoute path='/home' component={App} />
                    <PrivateRoute path='/notes' component={Notes} />
                    <PrivateRoute path='/libraries/:id' component={Library} />
                    <PrivateRoute exact path='/libraries' component={MyLibraries} />
                    <PrivateRoute path='/addlibrary' component={AddLibrary} />
                    <PrivateRoute path='/editnote/:id' component={EditNote} />
                    <PrivateRoute path='/editlibrary/:id' component={EditLibrary} />
                    <Route path='/about' component={About} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;