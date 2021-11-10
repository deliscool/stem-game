import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"



function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/game">Game</Link>
            <Link to="/learn">Learn</Link>
        </nav>
    );
}

export default NavBar;