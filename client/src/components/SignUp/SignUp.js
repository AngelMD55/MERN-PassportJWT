import React from "react";


function SignUp(props) {
    return (
        <div className="text-center" style={{marginTop:"100px"}}>
            <h1>Create a New Account</h1>
            <form className="p-2">
                <input
                    className="col-md-6 m-1"
                    value={props.firstName}
                    onChange={props.handleInputChange}
                    name="firstName"
                    placeholder="First Name"
                    required
                />

                <input
                    className="col-md-6 m-1"
                    value={props.lastName}
                    onChange={props.handleInputChange}
                    name="lastName"
                    placeholder="Last Name"
                    required
                />
                <input
                    className=" col-md-6 m-1"
                    value={props.email}
                    onChange={props.handleInputChange}
                    name="email"
                    placeholder="Email"
                    required
                />
                <input
                    className="col-md-6 m-1"
                    type="password"
                    value={props.password}
                    onChange={props.handleInputChange}
                    name="password"
                    placeholder="Password"
                    required
                />

                <div className="text-center">
                    {(props.error) ? <div class="alert alert-danger alert-dismissible fade show" role="alert"> {props.error}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div> : null}

                    <button
                        type="button"
                        className="btn btn-success mt-2"
                        onClick={() =>
                            props.signUpOnClick(
                                props.firstName,
                                props.lastName,
                                props.email,
                                props.password
                            )
                        }
                    >
                        Sign Up
                        </button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
