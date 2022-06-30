import React from "react";

const Services = (props) => {
  // Get Data From Props
  const { data } = props;

  // Distribution The Data To The Elements
  const Boxs = data
    ? data.map((dataBox) => {
        return (
          <div key={dataBox.id} className="box">
            <i className={dataBox.icon_name}></i>
            <div className="text">
              <h2>{dataBox.title}</h2>
              <p>{dataBox.text}</p>
            </div>
          </div>
        );
      })
    : null;
  return (
    <section class="services roadblock" id="services">
      <div class="special-heading">
        <h1>Services</h1>
        <p>Don't be busy, be productive</p>
      </div>
      <div class="container">
        <div class="content">{Boxs}</div>
      </div>
    </section>
  );
};

export default Services;
