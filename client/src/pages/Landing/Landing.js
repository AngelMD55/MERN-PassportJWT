import React, { Component } from "react";
import SignUp from "../../components/SignUp/SignUp";
import API from "../../utils/API";

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
            <div>
                <div className="col-md-6">
                    <SignUp
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        email={this.state.email}
                        password={this.state.password}
                        handleInputChange={this.handleInputChange}
                        signUpOnClick={this.signUpOnClick}
                    />
                </div>

            </div>
        )
    }
}


export default Landing;