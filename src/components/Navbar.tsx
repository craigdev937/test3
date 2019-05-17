import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
    <nav className="nav">
        <ul className="nav__ul">
            <NavLink className="nav__link" to="/">Home</NavLink>
            <NavLink className="nav__link" to="/about">About</NavLink>
        </ul>
    </nav>
);

