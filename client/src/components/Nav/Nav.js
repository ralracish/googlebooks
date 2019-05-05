import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <h1 className="title" href="/">
                Google Books Search
            </h1>
            <button className type="button" class="btn">Search</button>
            <button className type="button" class="btn">Saved</button>
        </nav>
    );
}

export default Nav;