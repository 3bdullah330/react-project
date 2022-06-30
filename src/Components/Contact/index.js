import React from "react";

import "../../Style/pages/contactPage/contactPage.css";

const Contact = () => {
  // Function For Delete Refesh
  const deleteRefesh = (e) => {
    e.preventDefault();
  };
  return (
    <section className="contact branch-page">
      <div className="content">
        <form onSubmit={deleteRefesh}>
          <h2>Fill The Form</h2>
          <input type="text" placeholder="Your Neme" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Your Phone" />
          <textarea placeholder="Tell Us What You Need"></textarea>
          <input type="submit" placeholder="Send" />
        </form>
        <div className="holder-img">
          <img src="imgs/contact.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
