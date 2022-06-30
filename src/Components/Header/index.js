import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  componentDidMount() {
    // Get Nav And Burger Icon
    let nav = document.querySelector(".mainNav"),
      burger = document.querySelector("#burger");

    // Function For Close Nav On Click Outside
    window.addEventListener("mouseup", (event) => {
      if (event.target !== nav && event.target !== burger) {
        nav.classList.remove("navActive");

        // Switch X Icon For Burger Icon
        burger.classList.remove("fa-x");
        burger.classList.add("fa-bars");
      }
    });
  }
  handelNav = () => {
    // Get Nav And Burger Icon
    let nav = document.querySelector(".mainNav"),
      burger = document.querySelector("#burger");

    // Open And Close Nav On Click
    nav.classList.toggle("navActive");

    // Change The Icon According To Status
    if (burger.classList[1] === "fa-bars") {
      burger.classList.remove("fa-bars");
      burger.classList.add("fa-x");
    } else {
      burger.classList.remove("fa-x");
      burger.classList.add("fa-bars");
    }
  };
  render() {
    return (
      <header className="mainHeader">
        <div className="container">
          <nav className="mainNav">
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </nav>
          <i class="fa-solid fa-bars" onClick={this.handelNav} id="burger"></i>
          <Link to="/" className="img">
            <img src="imgs/logo.png" alt="" />
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
