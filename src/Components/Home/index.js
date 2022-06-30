import React, { Component } from "react";

import Landing from "./Components/Landing";
import Section from "./Components/Section";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";

import "../../Style/pages/homePage/homePage.css";

class Home extends Component {
  state = {
    Data: [],
  };

  componentDidMount() {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          Data: data,
        });
      });
  }

  render() {
    return (
      <div>
        <Landing />
        <Section data={this.state.Data.section} />
        <Services data={this.state.Data.services} />
        <Portfolio data={this.state.Data.portfolio} />
      </div>
    );
  }
}

export default Home;
