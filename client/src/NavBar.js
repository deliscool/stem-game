import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import Logo from "./images/women in stem.png"



function NavBar() {
    return (
        <div className="nav-bar">
             <img className="" src={Logo} alt=""></img>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/learn">Learn</Link>
                <Link to="/game">Play</Link>
            </nav>
        </div>
       
    );
}

export default NavBar;