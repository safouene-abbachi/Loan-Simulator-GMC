import React, { Component } from "react";
import "./simulator.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import SliderAmount from "./SliderAmount";
import SliderDuration from "./SliderDuration";
import RightSide from "./RightSide";
import Axios from "axios";

class Simulator extends Component {
  constructor(props) {
    super(props);

    //  CALCULATUION

    let MPR = this.props.APR1 / 100 / 12;
    let amount = this.props.valueA;
    let duration = this.props.valueD;
    let totalAmountToRepay = amount + amount * MPR * duration;
    let monthly = totalAmountToRepay / duration;

    // save props values in to the state
    this.state = {
      valueAmount: this.props.valueA,
      stepAmount: this.props.stepA,
      maxAmount: this.props.maxA,
      minAmount: this.props.minA,

      valueDuration: this.props.valueD,
      stepDuration: this.props.stepD,
      maxDuration: this.props.maxD,
      minDuration: this.props.minD,

      APR: this.props.APR1,
      amountToR: Math.round(totalAmountToRepay).toFixed(),
      amountToRepay: 0,
      monthlyInst: Math.round(monthly).toFixed(),
      monthlyIn: 0
    };
  }

  //  UPDATE FUNCTION

  update = e => {
    // Assign to let changedID ID of slider which has been changed
    let changedID = e.target.id;
    let value = e.target.value;
    if (changedID === "sliderAmount") {
      this.setState({ valueAmount: e.target.value });
    }
    if (changedID === "sliderDuration") {
      this.setState({ valueDuration: e.target.value });
    }

    // if button bank rate clicked set APR to choosen value
    switch (changedID) {
      case "BIAT":
        this.setState({ APR: this.props.APR1 });

        break;

      case "BH":
        this.setState({ APR: this.props.APR2 });

        break;

      case "ATB":
        this.setState({ APR: this.props.APR3 });

        break;
      case "BT":
        this.setState({ APR: this.props.APR4 });

        break;

      default:
        break;
    }

    this.calculate(changedID, value);
  };

  sendSimulation() {
    const { monthlyInst, amountToR, APR } = this.state;
    const token = this.configToken();
    Axios.get("http://localhost:5000/api/users/current", token).then(
      currentUser => {
        Axios.post("/api/application/apply", {
          monthlyInstalement: monthlyInst,
          totalAmount: amountToR,
          rate: APR,
          username: currentUser.data.name,
          usermail: currentUser.data.email,
          bankname: currentUser.data.bankname
        })
          .then(res => console.log(""))
          .catch(err => console.log(err));
      }
    );
  }

  // CALCULATE FUNCTION

  calculate(id, value) {
    let amount, duration;
    let MPR = this.state.APR / 100 / 12; // MPR monthly APR for calculation
    let aprNew;
    // if calculate is after Duration is changed take value of duration from slider, but value of amount from state
    if (id === "sliderDuration") {
      duration = parseFloat(value);
      amount = parseFloat(this.state.valueAmount);
    }
    // if calculate is after Amount is changed take value of Amount from slider, but value of duration from state
    else if (id === "sliderAmount") {
      amount = parseFloat(value);
      duration = parseFloat(this.state.valueDuration);
    }
    // if calculate is after button credit history clicked  take values from state
    else {
      amount = parseFloat(this.state.valueAmount);
      duration = parseFloat(this.state.valueDuration);
      switch (id) {
        case "BIAT":
          aprNew = this.props.APR1;
          MPR = aprNew / 100 / 12; // MPR monthly APR for calculation
          break;

        case "BH":
          aprNew = this.props.APR2;
          MPR = aprNew / 100 / 12; // MPR monthly APR for calculation
          break;

        case "ATB":
          aprNew = this.props.APR3;
          MPR = aprNew / 100 / 12; // MPR monthly APR for calculation
          break;

        case "BT":
          aprNew = this.props.APR4;
          MPR = aprNew / 100 / 12; // MPR monthly APR for calculation
          break;

        default:
          break;
      }
    }
    // calculate total and monthly inst
    let totalAmountToRepay = amount + amount * MPR * duration;
    let monthly = totalAmountToRepay / duration;

    // fixing numbers
    totalAmountToRepay = Math.round(totalAmountToRepay).toFixed();
    monthly = Math.round(monthly).toFixed();

    //save results into state
    this.setState({ amountToR: totalAmountToRepay });
    this.setState({ monthlyInst: monthly });
  }

  configToken() {
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
  }

  sendMail() {
    const token = this.configToken();
    Axios.get("http://localhost:5000/api/users/current", token).then(
      currentUser => {
        // mail to user
        const userMailOptions = {
          to: currentUser.data.email
        };
        Axios.post(
          "http://localhost:5000/api/application/sendmail",
          userMailOptions,
          token
        ).then(() => console.log("Mail is sent successfully"));

        // mail to banker
        const bankerMailOptions = {
          to: "sky.bader@gmail.com",
          text: `A request has been sent by the user ${currentUser.data.name} applying for a ${this.state.amountToR} TND loan with a monthly instalment of ${this.state.monthlyInst} TND at a rate of ${this.state.APR}% . Please consider his demand.
        
Kind regards,`
        };
        Axios.post(
          "http://localhost:5000/api/application/sendmail",
          bankerMailOptions,
          token
        ).then(() => console.log("Mail is sent successfully"));
      }
    );
  }

  render() {
    console.log(this.state.monthlyInst);
    return (
      <Row className="show-grid mainContainer">
        <Col className="leftSide" xs={12} md={6}>
          <Form>
            <SliderAmount
              value={this.state.valueAmount}
              min={this.state.minAmount}
              max={this.state.maxAmount}
              onChange={this.update}
              step={this.state.stepAmount}
              currancy={this.props.currancy}
            />
            <SliderDuration
              value={this.state.valueDuration}
              min={this.state.minDuration}
              max={this.state.maxDuration}
              onChange={this.update}
              step={this.state.stepDuration}
            />
          </Form>
          <Button
            onClick={() => {
              this.setState({
                amountToRepay: this.state.amountToR,
                monthlyIn: this.state.monthlyInst
              });
            }}
          >
            SIMULATE !
          </Button>
          <Button
            onClick={() => {
              this.sendMail();
              this.sendSimulation();
            }}
          >
            Send Request{" "}
          </Button>
          <input
            type="button"
            value="Logout"
            className="button"
            onClick={() => {
              localStorage.removeItem("token");
              this.props.history.push("/log");
            }}
          />

          <Col className="logo" sm={12}></Col>
        </Col>

        <RightSide
          currancy={this.props.currancy}
          amount={this.state.amountToRepay}
          monthly={this.state.monthlyIn}
          APR={this.state.APR}
          btnOnClick={this.update}
        />
      </Row>
    );
  }
}
//  Assign Types for props
// Simulator.propTypes = {

//     valueD: React.PropTypes.number,
//     stepD: React.PropTypes.number,
//     maxD: React.PropTypes.number,
//     minD: React.PropTypes.number,

//     valueA: React.PropTypes.number,
//     stepA: React.PropTypes.number,
//     maxA: React.PropTypes.number,
//     minA: React.PropTypes.number,
//     APR1: React.PropTypes.number,
//     APR2: React.PropTypes.number,
//     APR3: React.PropTypes.number,
//     currancy: React.PropTypes.string,
// };

// // Assign deafault values to props

Simulator.defaultProps = {
  valueD: 12,
  stepD: 12,
  maxD: 72,
  minD: 12,

  valueA: 1000,
  stepA: 500,
  maxA: 100000,
  minA: 1000,

  APR1: 3.3,
  APR2: 9.6,
  APR3: 7.25,
  APR4: 6.2,

  currancy: "DT"
};

export default Simulator;
