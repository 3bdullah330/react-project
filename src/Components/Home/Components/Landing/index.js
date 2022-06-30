import React, { Component } from "react";

class Landing extends Component {
  state = {
    Slide: { marginLeft: `0vw` },
  };

  slide = () => {
    // Array For Given Value To Margin Left
    const arr = [0, 100, 200],
      bullets = document.querySelectorAll(".bullets span"),
      leftButton = document.querySelector(".shares div:first-child"),
      rightButton = document.querySelector(".shares div:last-child");

    // Variable To Manage Slider
    let count = 0;

    // Event Listener For Move Slide To Right
    rightButton.addEventListener("click", () => {
      count++;
      refreshSlide();
    });

    // Event Listener For Move Slide To Left
    leftButton.addEventListener("click", () => {
      count--;
      refreshSlide();
    });

    /*
      Event Listener For Equality The Count By Index,
      Make The Image Match, The Button Pressed
    */
    bullets.forEach((el, i) => {
      el.addEventListener("click", () => {
        count = i;
        refreshSlide();
      });
    });

    const refreshSlide = () => {
      // If Condition For Refining  Slide
      if (count === 3) {
        count = 0;
      } else if (count < 0) {
        count = 2;
      }

      // Send The Value For Slide
      this.setState({
        Slide: { marginLeft: `-${arr[count]}vw` },
      });

      // Loop For Add Mark To Active Bullet
      bullets.forEach((el, i) => {
        el.classList.remove("active");
        if (count === i) {
          el.classList.add("active");
        }
      });

      // Clear And Set Because Don't Loop Interval And Happening Error
      clearInterval(autoSlide);
      autoSlide = setInterval(() => {
        count++;
        refreshSlide();
      }, 4000);
    };

    // Interval For Auto Slide
    let autoSlide = setInterval(() => {
      count++;
      refreshSlide();
    }, 4000);
  };

  componentDidMount() {
    // Call Slide Function
    this.slide();
  }

  render() {
    return (
      <main>
        <div className="slider">
          <div className="holder-imgs">
            <div className="img first" style={this.state.Slide}></div>
            <div className="img"></div>
            <div className="img"></div>
          </div>
          <div className="shares">
            <div>
              <i className="fa-solid fa-angle-left fa-2x arrow"></i>
            </div>
            <div>
              <i className="fa-solid fa-angle-right fa-2x arrow"></i>
            </div>
          </div>
          <nav className="bullets">
            <span className="active"></span>
            <span></span>
            <span></span>
          </nav>
        </div>
        <div className="container">
          <h1>Hello There!</h1>
          <p>
            We are Leon - Super Creative {"&"} Minimal
            <br />
            Agency Web Template
          </p>
        </div>
      </main>
    );
  }
}

export default Landing;
