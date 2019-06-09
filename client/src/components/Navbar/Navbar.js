import React from 'react';
import LogIn from "../LogIn/LogIn";
import "./style.css";

export default function Navbar(props) {
    return (
        <nav className="navbar justify-content-end">
            {(props.user.firstName) ? "Welcome " + props.user.firstName.charAt(0).toUpperCase() + props.user.firstName.slice(1) :
                <LogIn
                    email={props.email}
                    password={props.password}
                    handleInputChange={props.handleInputChange}
                    loginOnClick={props.loginOnClick}
                />
            }
            <div className="d-flex flex-row-reverse bd-highlight">
                {(props.loggedIn) ? <div><button className="btn btn-danger" style={{ float: "right", marginLeft: "30px" }} onClick={props.logOutOnClick}>Log Out</button></div> :
                    <div></div>}
            </div>
        </nav>
    )
}
