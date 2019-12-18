import React, { Component } from 'react';
import "../components/simulator.css";



export default class Simulator extends Component {
    render() {
      return (  
       
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card card-body text-center mt-5">
                <h1 className="heading display-5 pb-3">Loan Calculator</h1>
                <form id="loan-form">
                   {/* Loan Amount  */}
                  <div className="form-group">
                    <div className="input-group">
                      <span classname="input-group-addon">$</span>
                      <input type="number" className="form-control" id="amount" placeholder="Loan Amount"/>
                    </div>
                  </div>
                   {/* Years to Repay  */}
                  <div className="form-group">
                      <input type="number" className="form-control" id="years" placeholder="Years to Repay"/>
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Calculate" className="btn btn-dark btn-block"/> 
                  </div>
                </form>
               {/* Loader Image  */}
                <div id="loading">
                  <img src="img/3.gif" alt=""/>
                </div>
                 {/* Results  */}
                <div id="results">
                <h5>Results</h5>
                  <div class="form-group">
                    <div class="input-group">
                      <span class="input-group-addon">Monthly Payment</span>
                      <input type="number" className="form-control" id="monthly-payment" disabled/>
                    </div>
                  </div>
    
                  <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">Total Payment</span>
                        <input type="number" className="form-control" id="total-payment" disabled/>
                      </div>
                  </div>
    
                  <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">Total Interest</span>
                        <input type="number" className="form-control" id="total-interest" disabled/>
                      </div>
                  </div>
    
                </div>
              </div>
            </div>
          </div>
        </div>
    
  
      
      );
      }
};

