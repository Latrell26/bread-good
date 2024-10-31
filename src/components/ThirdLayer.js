import React from "react";
import "../styles/ThirdLayer.css";

const ThirdLayer = () => {
  return (
    <div className="Third-layer">
    <div className="container">
      <div className="donate">
        <img className="donateClass" src="img/community.png" alt="Donate" />
      </div>
      <div className="Description">
        <h2 className="Heading">Make an Impact Today</h2>
        <p>Your contribution fuels our community programs,<br></br>providing resources and support to those who need it most. </p>
        <button className="LearnMoreButton">Learn More</button>
      </div>
    </div>
  </div>
  
  );
};

export default ThirdLayer;
