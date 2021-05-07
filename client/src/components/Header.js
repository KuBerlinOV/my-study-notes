import React from 'react';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';

export const Header = ({ startLogout, isAuthenticated }) => (
    isAuthenticated ? (
        <header id='private-hd'>
            <NavLink activeClassName='is-active' className='nav-link' to='/home' exact={true}>Home</NavLink>
            <NavLink activeClassName='is-active' className='nav-link' to='/notes'>Notes</NavLink>
            <NavLink activeClassName='is-active' className='nav-link' to='/about'>About</NavLink>
            <button onClick={startLogout} >Logout</button>
        </header>
    ) : (
        <header id='public-hd'>
            <NavLink activeClassName='is-active' className='nav-link' to='/' exact={true}>Login</NavLink>
            <NavLink activeClassName='is-active' className='nav-link' to='/about'>About</NavLink>
        </header>
    )
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => { dispatch(startLogout()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
