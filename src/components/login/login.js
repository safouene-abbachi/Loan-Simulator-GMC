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
    role: "",
    password: "",
    bankname: ""
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  //sign up
  signup = () => {
    const { name, email, password } = this.state;

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
    const { email, password, bankname } = this.state;
    axios
      .post("/api/users/login", { email, password, bankname })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        this.setState({ ...this.state, role: res.data.role });
      })
      .then(res =>
        this.props.history.push(
          this.state.role === "admin" ? `/admin` : `/simulator`
        )
      );
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
      this.setState({ currentUser: res.data });
    });
  }

  render() {
    return (
      <div className="access">
        <div class="body"></div>
        <div class="grad"></div>
        <div class="header">
          <div className="brand">
            Loan<span>Simulator </span>
          </div>
        </div>
        <br />

        <div class="login">
          <div>
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
            <input
              type="name"
              name="name"
              className="edit-button"
              placeholder="institution name "
              onChange={this.handleChange}
            />
            <br />

            <input
              type="button"
              value="Login"
              className="button"
              onClick={this.signin}
            />
          </div>

          <div className="sign-up">
            <input
              type="text"
              name="name"
              id=""
              className="edit-button"
              placeholder="name"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="email"
              id=""
              className="edit-button"
              placeholder="email"
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              id=""
              className="edit-button"
              placeholder="password"
              onChange={this.handleChange}
            />
            <input
              type="button"
              value="sign up"
              className="button"
              onClick={this.signup}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
