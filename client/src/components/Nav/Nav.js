import React from "react";
import { NavLink } from 'react-router-dom';
import './style.css';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <h1 className="title" href="/">
                Google Books Search
            </h1>
            <NavLink className="navlink" to='/'>Search</NavLink>
            <NavLink className="navlink"to='/saved'>Saved</NavLink>
            {/* <button className type="button" class="btn btn-success">Search</button> */}
            {/* <button className type="button" class="btn btn-success">Saved</button> */}
        </nav>
    );
}

export default Nav;