import React from "react";
import "../styles/FourthLayer.css";

const FourthLayer = () => {
  return (
    <div className="fourth-layer">
      <div className="container">
        <div className="Description">
          <h1 className="Heading">Make a Difference Today</h1>
          <p className="Paragraph">
            Your donation supports our cleanup efforts, helping us<br /> 
            restore our environment for a healthier community.<br />
            Together, we can create cleaner, safer spaces for everyone!
          </p>
          <button className="LearnMoreButton">Learn More</button>
        </div>
        <div className="donate">
          <img className="donate1" src="img/cleanup.png" alt="Cleanup" />
        </div>
      </div>
    </div>
  );
};

export default FourthLayer;
