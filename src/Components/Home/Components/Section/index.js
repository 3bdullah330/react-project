import React from "react";

const Section = (props) => {
  // Get Data From Props
  const { data } = props;

  // Distribution The Data To The Elements
  const Boxs = data
    ? data.map((dataBox) => {
        return (
          <div key={dataBox.id.toString()} className="box">
            <i className={dataBox.icon_name}></i>
            <h2>{dataBox.title}</h2>
            <p>{dataBox.text}</p>
          </div>
        );
      })
    : null;
  return (
    <section className="section roadblock">
      <div className="container">{Boxs}</div>
    </section>
  );
};

export default Section;
