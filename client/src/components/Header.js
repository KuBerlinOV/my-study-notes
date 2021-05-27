import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';


export const Header = ({ startLogout, isAuthenticated }) => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        if (showMenu === false) {
            setShowMenu(!showMenu)
        } else {
            setShowMenu(!showMenu)
        }
    }

    return (isAuthenticated ? (
        <div className='menu'>
            <div className={`menu-btn ${showMenu && 'close'}`} onClick={toggleMenu}>
                <div className='btn-line'></div>
                <div className='btn-line'></div>
                <div className='btn-line'></div>
            </div>
            <header id='menu-nav' className={`menu-nav ${showMenu && 'show'}`}>
                <NavLink onClick={toggleMenu} activeClassName='is-active' className='nav-link' to='/home' exact={true}>Home</NavLink>
                <NavLink onClick={toggleMenu} activeClassName='is-active' className='nav-link' to='/libraries'>My Libraries</NavLink>
                <NavLink onClick={toggleMenu} activeClassName='is-active' className='nav-link' to='/notes'>All Notes</NavLink>
                <NavLink onClick={toggleMenu} activeClassName='is-active' className='nav-link' to='/about'>About</NavLink>
                <button onClick={toggleMenu} className='logout-btn' onClick={startLogout} >Logout</button>
            </header>
        </div>
    ) : (
        <div className='menu'>
            <div className={`menu-btn ${showMenu && 'close'}`} onClick={toggleMenu}>
                <div className='btn-line'></div>
                <div className='btn-line'></div>
                <div className='btn-line'></div>
            </div>
            <header id='menu-nav-public' className={`menu-nav-public ${showMenu && 'show'}`}>
                <NavLink onClick={toggleMenu} activeClassName='is-active' className='nav-link' to='/' exact={true}>Login</NavLink>
                <NavLink onClick={toggleMenu} activeClassName='is-active' className='nav-link' to='/about'>About</NavLink>
            </header>
        </div>
    )
    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => { dispatch(startLogout()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
