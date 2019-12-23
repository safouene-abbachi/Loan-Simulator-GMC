import React, { Component } from "react";
import Login from "./login/login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../components/header.css";
export default class Header extends Component {
  render() {
    return (
      <Router>
        <nav className="lol">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>

          <div class="animation start-home"></div>
          <div class="rounded-social-buttons">
            <a class="social-button facebook" href="#"></a>
            <a class="social-button twitter" href="#"></a>
            <a class="social-button linkedin" href="#"></a>
            <a class="social-button youtube" href="#"></a>
            <a class="social-button instagram" href="#"></a>

            <a class="social-button google-plus" href="#"></a>
            <a class="social-button github" href="#"></a>
          </div>
        </nav>
      </Router>
    );
  }
}
