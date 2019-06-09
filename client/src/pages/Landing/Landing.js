import React, { Component } from "react";
import SignUp from "../../components/SignUp/SignUp";
import API from "../../utils/API";
import "./style.css"

class Landing extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        createdUser: false,
        error: null
    }

    signUpOnClick = (firstName, lastName, email, password) => {
        API.createUser({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
            .then(res => {
                this.setState({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: ""
                })
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div id="loggedButton">
                {(this.props.loggedIn) ?
                    <div className="row" style={{ textAlign: "center" }}>
                        <div className="col-md-6 col-lg-6" style={{ display: "inline-block" }} >

                        </div>
                        <div className="col-md-6 col-lg-6" style={{ display: "inline-block" }}>
                            <button type="button" className="btn btn-danger seeUsers">See All Users</button>
                        </div>
                    </div>
                    :
                    <div className="row" style={{ textAlign: "center" }}>
                        <div className="col-md-6 col-lg-6" style={{ display: "inline-block" }} >
                            <SignUp
                                firstName={this.state.firstName}
                                lastName={this.state.lastName}
                                email={this.state.email}
                                password={this.state.password}
                                handleInputChange={this.handleInputChange}
                                signUpOnClick={this.signUpOnClick}
                            />
                        </div>
                        <div className="col-md-6 col-lg-6" style={{ display: "inline-block" }}>
                            <button type="button" className="btn btn-danger seeUsers">See All Users</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}


export default Landing;

{/* <div style={{ textAlign: "center" }}><div style={{ display: "inline-block", marginTop:"200px" }}><button type="button" class="btn btn-danger" id="aloneButton" style={{ display: "inline-block" }}>See All Users</button></div></div> */ }