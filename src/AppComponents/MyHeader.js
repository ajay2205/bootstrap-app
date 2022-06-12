import React from "react";
import headerImg from "../Images/header-img.jpg";

function MyHeader() {
  return (
    <div>
      <img alt="" src={headerImg} className="header_img" />
      <h1 className="header_text">
        Your Online Shop For Decor,<br></br> Spiritual And Gifting.
      </h1>
      <button className="header_button">Explore</button>
    </div>
  );
}

export default MyHeader;
