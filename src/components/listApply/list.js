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

  sendMail(request) {
    const token = this.configToken();
    const userMailOptions = {
      to: request.usermail,
      text: `Dear ${request.username},

Congratulations, the request you applied for on ${request.date} has been approved.

Kind Regards,
Safouene Abbachi`
    };
    axios
      .post(
        "http://localhost:5000/api/application/sendmail",
        userMailOptions,
        token
      )
      .then(() => console.log("Mail is sent successfully"));
  }

  getApplication = () => {
    axios
      .get(
        "http://localhost:5000/api/application/getApplications",
        this.configToken()
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

  getcurrentUser = () => {
    axios.get("/api/users/current", this.configtoken()).then(res => {
      console.log(res.data);
    });
  };
  render() {
    return (
      <div className="apply">
        {this.state.list.map((el, key) => (
          <div key={key} class="card">
            <div class="card-body">
              <h5 class="card-title">
                Total Amount To Repay {el.totalAmount} DT
              </h5>
              <h5 class="card-title">{el.username} </h5>
              <h5 class="card-title">{el.usermail} </h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Monthly Instalement : {el.monthlyInstalement} DT
              </h6>
              <p class="card-text">
                Rate : {el.rate} from {el.bankname}{" "}
              </p>
              <button
                type="button"
                class="btn btn-success"
                onClick={() => {
                  this.sendMail(el);
                }}
              >
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
