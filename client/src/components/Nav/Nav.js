import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                Google Books Search
            </a>
            <button className type="button" class="btn">Search</button>
            <button className type="button" class="btn">Saved</button>
        </nav>
    );
}

export default Nav;