import React, { Component } from "react";
import Carousel from "./carousel/carousel";
import Card from "../components/cards/card";
import "./body.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../components/login/login";

export default class body extends Component {
  render() {
    return (
      <div className="middle-section">
        <div className="adv-img">
          <Link to="/log">
            <div class="container">
              <button class="skewBtn lorange">START!</button>
            </div>
          </Link>
        </div>
        <div className="adv">
          <h1>SEIZE THE ADVANTAGE</h1>
          <p className="adv-parag">
            The benefit of the Credit Score Simulator is that it shows you an
            estimate of how much impact one particular action could have on your
            credit health. So, when your score changes in the future, you might
            have a better idea of which particular actions are causing that
            change.
          </p>

          <img
            className="slogan2"
            src="https://ck-content.imgix.net/res/content/bundles/homepage/1.12.6/assets/market-iconsx3.png?auto=format,compress&w=600"
          ></img>
        </div>
        <Carousel />

        <div className="avantages"></div>

        <Card />
      </div>
    );
  }
}
