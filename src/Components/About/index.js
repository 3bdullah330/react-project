import React, { Component } from "react";

import "../../Style/pages/aboutPage/aboutPage.css";

class About extends Component {
  render() {
    return (
      <section className="about branch-page-scroll" id="about">
        <div className="holder">
          <div className="special-heading">
            <h1>About</h1>
            <p>Less is more work</p>
          </div>
          <div className="container">
            <div className="holder-img">
              <img src="imgs/about.jpg" alt="" />
            </div>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliqui
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliqu
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
