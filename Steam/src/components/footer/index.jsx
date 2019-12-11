import React, { Fragment } from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <Fragment>
      <div className="steam-footer">
        © Steam Corporation {year}. Website by Stefan Iliev®
      </div>
    </Fragment>
  );
};

export default Footer;
