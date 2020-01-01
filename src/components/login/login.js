import React, { Component } from "react";
import "../login/login.css";
import axios from "axios";
import Simulator from "../../components/simulator/simulator";
import { withRouter, Link, Route } from "react-router-dom";

class Login extends Component {
  state = {
    nametoken: "",
    name: "",
    email: "",
    password: ""
  };
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  //sign up
  signup = () => {
    const { name, email, password } = this.state;
    console.log("name", name);
    axios
      .post("/api/users/register", {
        name,
        email,
        password,
        password2: password
      })

      .then(res => this.props.history.push("/users"))
      .catch(err => console.log("error", err));
  };

  signin = () => {
    const { email, password } = this.state;
    axios
      .post("api/users/login", { email, password })
      .then(res => localStorage.setItem("token", res.data.token));
  };

  configtoken = () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };
    if (token) {
      config.headers["Authorization"] = token;
    }

    return config;
  };

  componentDidMount() {
    axios.get("/api/users/current", this.configtoken()).then(res => {
      console.log(res.data);
      this.setState({ nametoken: res.data.name });
    });
  }

  render() {
    return (
      <div>
        <div class="body"></div>
        <div class="grad"></div>
        <div class="header">
          <div>
            Loan<span>Simulator </span>
          </div>
        </div>
        <br />

        <div class="login">
          <p>{this.state.nametoken}</p>
          <input
            type="text"
            name="email"
            className="edit-button"
            placeholder="email"
            onChange={this.handleChange}
          />

          <br />

          <input
            type="password"
            name="password"
            className="edit-button"
            placeholder="password"
            onChange={this.handleChange}
          />
          <br />
          <Link className="link" to={`/logged/${this.state.nametoken}`}>
            <input
              type="button"
              value="Login"
              className="button"
              onClick={this.signin}
            />
          </Link>

          <input
            type="button"
            value="Logout"
            className="button"
            onClick={() => localStorage.removeItem("token")}
          />
          {/* <input type="button" value="Login"></input> */}
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
