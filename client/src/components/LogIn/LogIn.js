import React from 'react'

function LogIn(props) {
    return (
        <div className="mr-3">
            <form onSubmit={props.loginOnClick} className="form-inline" >
                <div className="form-group">
                    <input
                        style={{ width: "250px", height: "40px", fontSize:"20px" }}
                        value={props.email}
                        onChange={props.handleInputChange}
                        name="email"
                        placeholder="Email"
                    />
                </div>
                <div className="form-group">
                    <input
                        style={{ width: "250px", height: "40px", marginLeft: "10px", fontSize:"20px" }}
                        type="password"
                        value={props.password}
                        onChange={props.handleInputChange}
                        name="password"
                        placeholder="Password"
                    />
                </div>
                < div className="form-group">
                    <button type="submit" style={{ float: "right", marginLeft: "10px"}} className="btn btn-success" >
                        Log In
                </button>
                </div>
            </form>

        </div>
    )
}

export default LogIn;

