import React from 'react';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';


export const Header = ({ startLogout, isAuthenticated }) => (
    isAuthenticated ? (
        <div className='hd'>
            <header id='hd-private'>
                <NavLink activeClassName='is-active' className='nav-link' to='/home' exact={true}>Home</NavLink>
                <NavLink activeClassName='is-active' className='nav-link' to='/libraries'>My Libraries</NavLink>
                <NavLink activeClassName='is-active' className='nav-link' to='/notes'>All Notes</NavLink>
                <NavLink activeClassName='is-active' className='nav-link' to='/about'>About</NavLink>
                <button className='logout-btn' onClick={startLogout} >Logout</button>
            </header>
        </div>
    ) : (
        <div className='hd'>
            <header id='hd-public'>
                <NavLink activeClassName='is-active' className='nav-link' to='/' exact={true}>Login</NavLink>
                <NavLink activeClassName='is-active' className='nav-link' to='/about'>About</NavLink>
            </header>
        </div>
    )
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => { dispatch(startLogout()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
