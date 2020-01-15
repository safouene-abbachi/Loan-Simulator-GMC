import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="footer-info">
          <section class="social">
            <p class="intro-social">
              Wistia creates video software for growing businesses.
            </p>
            <p className="social-links">
              Follow us:
              <a
                className="facebook"
                href="https://web.archive.org/web/20190830151841/https://www.facebook.com/wistia"
              >
                Facebook
              </a>
              ,
              <a
                className="facebook"
                href="https://web.archive.org/web/20190726000449/https://www.linkedin.com/company/wistia"
              >
                LinkedIn
              </a>
              ,
              <a
                className="facebook"
                href="https://web.archive.org/web/20190614235836/https://www.twitter.com/wistia"
              >
                Twitter
              </a>
              ,
              <a
                class="facebook"
                href="https://web.archive.org/web/20190908101510/https://www.instagram.com/wistia"
              >
                Instagram
              </a>
            </p>
          </section>
          <hr />
          <section className="footer-navigation">
            <div>
              <img className="" src="" alt="" />

              <ul>
                <li>
                  <h3>WISTIA FOR MARKETING</h3>
                </li>
                <li>Features</li>
                <li>Pricing</li>
                <li className="create">
                  <a href="https://web.archive.org/web/20190614235836/https://wistia.com/account/signup">
                    Create a free account
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <img src="" alt="" />
              <ul>
                <li>
                  <h3>SOAPBOX</h3>
                </li>
                <li>Features</li>
                <li>Pricing</li>
                <li className="install">
                  <a href="https://web.archive.org/web/20190617174351/https://chrome.google.com/webstore/detail/lmepjnndgdhcgphilomlfekmgnnmngbi">
                    Install for free
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <h3>COMPANY</h3>
                </li>
                <li>Blog</li>
                <li>Team</li>
                <li>Career</li>
                <li>Values</li>
                <li>Brand Assets</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <h3>Support</h3>
                </li>
                <li>Documentation</li>
                <li>Developers</li>
                <li>Troubleshooting</li>
                <li>Status</li>
                <li>Contact Support</li>
              </ul>
            </div>
          </section>
        </div>
        <div className="footer-copyrights">
          <p>
            ©2001–2019 All rights reserved.
            <a href="https://web.archive.org/web/20190614235836/https://wistia.com/privacy">
              Privacy
            </a>
            and
            <a href="https://web.archive.org/web/20190614235836/https://wistia.com/terms">
              Terms
            </a>
            .
          </p>
        </div>
      </footer>
    );
  }
}
