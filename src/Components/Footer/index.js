import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="mainFooter">
      <span>
        &copy;{date}-<span>Leon</span>, All Right Reserved
      </span>
    </footer>
  );
};

export default Footer;
