import React from 'react';
import LogIn from "../LogIn/LogIn";
import "./style.css";

export default function Navbar() {
    return (
        <nav className="navbar justify-content-end">
            <LogIn/>
        </nav>
    )
}
