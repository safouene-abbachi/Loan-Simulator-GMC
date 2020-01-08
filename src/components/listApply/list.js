import React, { Component } from "react";
import axios from "axios";
import "./list.css";
export default class List extends Component {
  state = {
    list: []
  };
  deleteApplication = id => {
    axios
      .delete(`http://localhost:5000/api/application/getApplications/${id}`)
      .then(() => this.getApplication())
      .catch(err => console.log(err));
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

  getApplication = () => {
    axios
      .get(
        "http://localhost:5000/api/application/getApplications",
        this.configtoken()
      )
      .then(res =>
        this.setState({
          list: res.data
        })
      );
  };
  componentDidMount() {
    this.getApplication();
  }
  render() {
    return (
      <div className="apply">
        {this.state.list.map((el, key) => (
          <div key={key} class="card">
            <div class="card-body">
              <h5 class="card-title">
                Total Amount To Repay {el.totalAmount} DT
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Monthly Instalement : {el.monthlyInstalement} DT
              </h6>
              <p class="card-text">Rate : {el.rate}</p>
              <button type="button" class="btn btn-success">
                Approve
              </button>
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => this.deleteApplication(el._id)}
              >
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
