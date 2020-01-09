import React from "react";
import Header from "./components/header";
import Body from "./components/body";
import Simulator from "./components/simulator/simulator";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import { PrivateRoute } from "./components/privateRoute";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./components/listApply/list";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Simulator /> */}

        <Switch>
          <Route exact path="/" render={() => <Body />} />
          <Route exact path="/log" render={() => <Login />} />
          <PrivateRoute exact path="/simulator" component={Simulator} />
          <PrivateRoute exact isAdmin path="/admin" component={List} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
