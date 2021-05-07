import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

//we are passing the components through the component prop
export const PrivateRoute = ({ isAuthenticated,
    component: Component,
    ...rest //<--variable that getting all the rest of props when distructering a props object
}) => {
    return (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to='/' />
            )
        )} />
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute);