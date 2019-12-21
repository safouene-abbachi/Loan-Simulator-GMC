import React, { Component } from "react";
import Login from "../components/login/login";

import "../components/header.css";
export default class Header extends Component {
  render() {
    return (
      <nav className="lol">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Portefolio</a>
        <a href="#">Contact</a>

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

        {/* <Login /> */}
      </nav>
    );
  }
}
