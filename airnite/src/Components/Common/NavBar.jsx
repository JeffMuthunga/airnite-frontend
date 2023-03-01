import React from "react";
import {NavLink} from "react-router-dom"

//NavBar component
function NavBar (){

    return (
        <header>
        <nav className="nav-container">
        <div className="navbar">
            <NavLink className="nav-branding" to="/home">
                <img src="./Images/axis.png" alt="" width={10} height={40}/>
                Oppenheimer LLC</NavLink>
            <ul className="nav-menu">
                <li className="nav-link"><NavLink  to="/home"> Home</NavLink ></li>
                <li className="nav-link"><NavLink  to="/properties">Properties</NavLink ></li>
                <li className="nav-link"><NavLink  to="/add">Admin</NavLink ></li>
            </ul>
        </div>
        </nav>
        </header>
    )
}

export default NavBar