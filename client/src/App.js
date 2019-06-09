import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from './utils/API';
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Profile from "./pages/Profile/Profile";
import NoMatch from "./pages/NoMatch/NoMatch";
import Footer from "./components/Footer/Footer";

class App extends Component {

  state = {
    user: {},
    email: "",
    password: "",
    loggedIn: false,
    error: null
  }

  updateUser = () => {
    API.getCurrentUser()
      .then((res) => {
        this.setState({
          user: res.data.user,
          loggedIn: true
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  loginOnClick = (event) => {
    event.preventDefault()
    const { email, password } = this.state
    axios.post("/auth/login", { email, password })
      .then((res) => {
        localStorage.setItem("jwtToken", res.data.token);
        if (res.data.success) {
          this.updateUser();
        }
        if (res.data.error) {
          // Show error to user
          this.setState({
            error: res.data.error
          })
        }
      })
      .catch(err => console.log(err))
  }

  logOutOnClick = () => {
    axios.get("/auth/logout")
      .then(res => {
        localStorage.removeItem("jwtToken");
        this.setState({
          user: {},
          loggedIn: false
        });
        window.location.reload();
      })
      .catch(err => {
        console.log(err)
      });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar
            user={this.state.user}
            email={this.state.email}
            password={this.state.password}
            loggedIn={this.state.loggedIn}
            handleInputChange={this.handleInputChange}
            loginOnClick={this.loginOnClick}
            logOutOnClick={this.logOutOnClick}
            error={this.state.error}
          />
          <Switch>
            <Route exact path="/" render={(props) => <Landing user={this.state.user} loggedIn={this.state.loggedIn} {...props} />} />
            {/* <Route exact path="/profile" render={(props) => <Profile updateUser={this.updateUser} {...props} />} /> */}
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  };
};

export default App;