import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../components/header.css";
export default class Header extends Component {
  render() {
    return (
      <Router>
        <nav className="lol">
          <a href="https://www.w3schools.com/" target="_blank">
            Home
          </a>
          <a href="https://www.w3schools.com/" target="_blank">
            About
          </a>
          <a href="https://www.w3schools.com/" target="_blank">
            Contact
          </a>

          <div class="animation start-home"></div>
          <div class="rounded-social-buttons">
            <a
              class="social-button facebook"
              href="https://www.facebook.com/bader.benrejeb2"
            ></a>

            <a
              class="social-button linkedin"
              href="https://www.linkedin.com/checkpoint/lg/login-submit"
            ></a>
            <a
              class="social-button youtube"
              href="https://www.youtube.com/watch?v=3x45pzmXeNo"
            ></a>
            <a
              class="social-button instagram"
              href="https://www.instagram.com/?hl=fr"
            ></a>

            <a
              class="social-button github"
              href="https://github.com/safouene-abbachi"
            ></a>
          </div>
        </nav>
      </Router>
    );
  }
}
