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
      .post("/api/users/login", { email, password })
      .then(res => localStorage.setItem("token", res.data.token))
      .then(res => this.props.history.push(`/log/${this.state.nametoken}`));
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
      // <div className="nav">
      //   <input
      //     type="email"
      //     name="email"
      //     id=""
      //     className="edit-button"
      //     placeholder="email"
      //     onChange={this.handleChange}
      //   />
      //   <input
      //     type="password"
      //     name="password"
      //     id=""
      //     className="edit-button"
      //     placeholder="password"
      //     onChange={this.handleChange}
      //   />
      //   <input
      //     type="button"
      //     value="sign in"
      //     className="button"
      //     onClick={this.signin}
      //   />
      //   <hr />
      //   <input
      //     type="text"
      //     name="name"
      //     id=""
      //     className="edit-button"
      //     placeholder="name"
      //     onChange={this.handleChange}
      //   />
      //   <input
      //     type="email"
      //     name="email"
      //     id=""
      //     className="edit-button"
      //     placeholder="email"
      //     onChange={this.handleChange}
      //   />
      //   <input
      //     type="password"
      //     name="password"
      //     id=""
      //     className="edit-button"
      //     placeholder="password"
      //     onChange={this.handleChange}
      //   />
      //   <input
      //     type="button"
      //     value="sign up"
      //     className="button"
      //     onClick={this.signup}
      //   />
      //   <hr />
      //   <p>{this.state.nametoken}</p>
      //   <input
      //     type="button"
      //     value="Logout"
      //     className="button"
      //     onClick={() => localStorage.removeItem("token")}
      //   />
      // </div>
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
            <Link className="link" to={`/log/${this.state.nametoken}`}>
              <input
                type="button"
                value="Login"
                className="button"
                onClick={this.signin}
              />
            </Link>
          </div>

          {/* <input
            type="button"
            value="Logout"
            className="button"
            onClick={() => localStorage.removeItem("token")}
          /> */}
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
