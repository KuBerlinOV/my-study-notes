import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
    <header>
        <NavLink activeClassName='is-active' className="nav-link" to="/" exact={true}>Home</NavLink>
        <NavLink activeClassName='is-active' className="nav-link" to="/notes">Notes</NavLink>
        <NavLink activeClassName='is-active' className="nav-link" to="/about">Organizing your studies</NavLink>
    </header>
)

export default Header;
