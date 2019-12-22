import React, { Component } from "react";
import "../cards/card.css";

export default class Card extends Component {
  render() {
    return (
      <div>
        <div class="title">
          <h1>
            <span>Tou</span>
            <span>rist</span> <span>Attr</span>
            <span>acti</span>
            <span>ons</span>
          </h1>
        </div>
        <div class="card1">
          <img
            src="http://www.pngmart.com/files/5/Pyramids-PNG-HD.png"
            alt=""
          ></img>
          <h3>Pyramids</h3>
          <p>
            The Egyptian pyramids are ancient pyramid-shaped masonry structures
            located in Egypt. As of November 2008, sources cite either 118 or
            138 as the number of identified Egyptian pyramids.
          </p>
        </div>

        <div class="card2">
          <img
            src="https://wallazee.global.ssl.fastly.net/images/dynamic/items/383-1024.png"
            alt="Eiffel Tower"
          ></img>
          <h3>Statue of Liberty</h3>
          <p>
            The Statue of Liberty is a colossal neoclassical sculpture on
            Liberty Island in New York Harbor in New York City, in the United
            States.
          </p>
        </div>

        <div class="card3">
          <img
            src="http://pluspng.com/img-png/download-taj-mahal-png-images-transparent-gallery-advertisement-1185.png"
            alt=""
          ></img>
          <h3>Taj Mahal</h3>
          <p>
            The Taj Mahal is an ivory-white marble mausoleum on the south bank
            of the Yamuna river in the Indian city of Agra. It was commissioned
            in 1632 by the Mughal emperor.
          </p>
        </div>
        <div class="footer"></div>
      </div>
    );
  }
}
