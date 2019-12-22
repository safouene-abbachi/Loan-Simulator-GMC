import React, { Component } from "react";
import Carousel from "./carousel/carousel";
import Card from "../components/cards/card";
import "./body.scss";

export default class body extends Component {
  render() {
    return (
      <div className="middle-section">
        <div className="adv-img">
          {/* <p className="intro"> */} {/* <u>SIMULATE YOUR OWN CREDIT</u> */}
          {/* <table>
              <tbody>
                <tr>
                  <td>
                    <a href="http://www.biat.com.tn/" target="_blank">
                      <img
                        width="100"
                        height="100"
                        className="bank-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Logo_BIAT_FR_%283%29.png"
                      ></img>
                    </a>
                  </td>
                  <td>
                    <a
                      href="http://www.attijaribank.com.tn/Fr/"
                      target="_blank"
                    >
                      <img
                        width="100"
                        height="100"
                        className="bank-logo"
                        src="https://upload.wikimedia.org/wikipedia/fr/9/91/ATW.PNG"
                      ></img>
                    </a>
                  </td>
                  <td>
                    <a href="https://www.bh.com.tn/" target="_blank">
                      <img
                        width="100"
                        height="100"
                        className="bank-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6d/BH_BANK.png"
                      ></img>
                    </a>
                    <a
                      href="http://www.banquezitouna.com/Fr/accueil_46_7"
                      target="_blank"
                    >
                      <img
                        width="100"
                        height="100"
                        className="bank-logo"
                        src="https://www.tunisinfos.com/wp-content/uploads/2019/04/Banque-Zitouna.jpg"
                      ></img>
                    </a>
                    <a href="http://www.btknet.com/" target="_blank">
                      <img
                        width="100"
                        height="100"
                        className="bank-logo"
                        src="https://www.apbt.org.tn/wp-content/uploads/2017/10/ag43-btk-banque-logo.jpg"
                      ></img>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table> */}
          {/* <p>With Multiple Bank Rates</p> */}
          {/* </p> */}
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

        <div className="avantages">
          {/* <img
            className="slogan"
            src="https://sso.freddiemac.com/lsp_public/assets/youwillget_7.svg"
          ></img> */}
          {/* <div className="img-box">
            <img
              className="benefits"
              src="https://www.velocityuc.com/wp-content/uploads/2019/01/shutterstock_151960478.jpg"
            ></img>
            <img
              className="benefits"
              src="https://ca.res.keymedia.com/files/image/paperwork1.jpg"
            ></img>
            <img
              className="benefits"
              src="https://i2.wp.com/iedunote.com/img/1526/qualities-of-a-good-plan.jpg?fit=2500%2C1522&ssl=1"
            ></img>
            <img
              className="benefits"
              src="https://jonasdiop.com/wp-content/uploads/2018/09/shortcuts-1.jpg"
            ></img>
          </div>{" "} */}
        </div>

        <Card />
        <Card />
      </div>
    );
  }
}
