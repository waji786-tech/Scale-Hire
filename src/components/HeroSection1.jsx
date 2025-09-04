import React from "react";

const HeroSection1 = () => {
  return (
    <div className="container">
      <div className="section1">
        <h1 className="section1-heading">
          Automate High-Volume Hiring in 2 Steps
        </h1>
        <p className="section1-p">
          Upload job description and resumes — get a ready-to-hire shortlist{" "}
        </p>
        <p className="black-box"></p>
        <p className="border"></p>
        <button className="get-started">Get Started</button>
        <img className="star" src="./images/star.png" alt="star" />
        <p className="border-2"></p>
      </div>
    </div>
  );
};

export default HeroSection1;
