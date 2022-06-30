import React from "react";

const Portfolio = (props) => {
  // Get Data From Props
  const { data } = props;

  // Distribution The Data To The Elements
  const Boxs = data
    ? data.map((dataBox) => {
        return (
          <div key={dataBox.id} className="box">
            <div className="holder-img">
              <img src={dataBox.src} alt="" />
            </div>
            <footer>
              <h2>{dataBox.title}</h2>
              <p>{dataBox.text}</p>
            </footer>
          </div>
        );
      })
    : null;
  return (
    <section className="portfolio roadblock" id="portfolio">
      <div className="special-heading">
        <h1>Portfolio</h1>
        <p>Don't be busy, be productive</p>
      </div>
      <div className="container">{Boxs}</div>
    </section>
  );
};

export default Portfolio;
