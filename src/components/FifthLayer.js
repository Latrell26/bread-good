import React from "react";
import "../styles/FifthLayer.css";

const FifthLayer = () => {
  return (
    <div className="Fifth-layer">
      <div className="container"> 
        <div className="donate2"> 
          <img className="donateClass" src="img/charity.png" alt="Support Our Cause" />
        </div>
        <div className="Description">
          <h2 className="Heading">
            Support Our Cause
          </h2>
          <p className="Paragraph">
            Your generous donation empowers us to support<br /> meaningful charity efforts and improve communities.
          </p>
          <button className="LearnMoreButton">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default FifthLayer;
