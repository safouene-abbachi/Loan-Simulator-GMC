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

            <p>
              Get rid of time wasted on useless things .Simply put, we can spend
              more hours on outdoor activities and less time indoors. This tends
              to increase exercise and decrease depression. So daylight saving
              time may make us happier and healthier.
            </p>
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

            <p>
              {" "}
              Since electronic forms are easier to fill out than paper, response
              rates normally improve. Adding questions and editing information
              can be done quickly and easily. Forms are made secure through use
              of password protection and encryption. Data is stored on secure
              servers
            </p>
            <p class="read-more">
              <a href="#">Read More</a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
