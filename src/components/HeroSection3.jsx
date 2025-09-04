import React from "react";

const HeroSection3 = () => {
  return (
    <div className="section3">
      <div className="container">
        <h1 className="section3-heading">Why SorsX Scale Hire is Different</h1>
        <div className="section3-childrens">
          <div className="section3-children1">
            <img className="text" src="./images/text.png" alt="text" />
            <h1 className="text-heading">Not just another text filter</h1>
            <p className="text-p">
              We interview candidates with AI video interviews for deeper
              screening
            </p>
          </div>
          <div className="section3-children2">
            <img className="lines" src="./images/vector.png" alt="lines" />
            <h1 className="lines-heading">100% Automated</h1>
            <p className="lines-p">
              We handle outreach, interviews and candidate rankings for you.
            </p>
          </div>
          <div className="section3-children3">
            <img className="vector" src="./images/lines.png" alt="vector" />
            <h1 className="vector-heading">All you do is here</h1>
            <p className="vector-p">
              Instead of hours of calls and interviews, simply pick your top
              candidates and hire
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection3;
