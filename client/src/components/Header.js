import React from 'react';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';

export const Header = ({ startLogout }) => (
    <header>
        <NavLink activeClassName='is-active' className='nav-link' to='/home' exact={true}>Home</NavLink>
        <NavLink activeClassName='is-active' className='nav-link' to='/notes'>Notes</NavLink>
        <NavLink activeClassName='is-active' className='nav-link' to='/about'>Organizing your studies</NavLink>
        <button onClick={startLogout} >Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => { dispatch(startLogout()) }
})

export default connect(undefined, mapDispatchToProps)(Header);
