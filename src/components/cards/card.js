import React, { Component } from "react";
import "../cards/card.scss";

export default class Card extends Component {
  render() {
    return (
      <section>
        <div class="blog-card">
          <div class="meta">
            <div
              class="photo1"
              // style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"
            ></div>
            <ul class="details"></ul>
          </div>
          <div class="description">
            <h1>Customising Your Loan</h1>

            <p>
              {" "}
              Using our Interest Rate Loan Calculator, you can determine the
              full repayment amount on our loans. Simply use the slider on the
              loan calculator to select the amount of money you wish to borrow
              then use the next slider to select the number of days you wish to
              have the loan. Our loan calculator will then calculate interest
              rates, and in the column on the right, you will see the total loan
              calculation.
              {/* The Simple Loan Calculator will determine your estimated payments
              for different loan amounts, interest rates and terms. */}
            </p>
            <p class="read-more">
              <a href="#">Read More</a>
            </p>
          </div>
        </div>
        <div class="blog-card alt">
          <div class="meta">
            <div
              class="photo2"
              // style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)"
            ></div>
            <ul class="details"></ul>
          </div>
          <div class="description">
            <h1>Saving Time</h1>

            <p>Get rid of time wasted on useless things</p>
            <p class="read-more">
              <a href="#">Read More</a>
            </p>
          </div>
        </div>
        <div class="blog-card">
          <div class="meta">
            <div
              class="photo3"
              // style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"
            ></div>
            <ul class="details"></ul>
          </div>
          <div class="description">
            <h1>Paper Work</h1>

            <p> </p>
            <p class="read-more">
              <a href="#">Read More</a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
