import React from "react";
import Header from "./components/header";
import Body from "./components/body";
import Simulator from "./components/simulator/simulator";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Simulator /> */}
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Body />} />
          <Route exact path="/log" render={() => <Login />} />
          <Route exact path="/logged/:nametoken" render={() => <Simulator />} />
        </Switch>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
