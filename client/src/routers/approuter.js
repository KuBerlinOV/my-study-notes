import React from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import App from '../App'
import About from '../components/About';
import NotFoundPage from '../components/NotFoundPage';
import Libraries from '../components/Libraries';
import Notes from '../components/Notes';
import AddNote from '../components/AddNote';
import EditNote from '../components/EditNote'
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const AppRouter = () => {
    return (
        <Router history={history} >
            <div>
                <Switch>
                    <Route path='/' component={LoginPage} exact={true} />
                    <PrivateRoute path='/home' component={App} />
                    <PrivateRoute path='/notes' component={Notes} />
                    <PrivateRoute path='/addnote' component={AddNote} />
                    <PrivateRoute path='/edit/:id' component={EditNote} />
                    <Route path='/about' component={About} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;