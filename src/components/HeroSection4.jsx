import React from "react";

const HeroSection4 = () => {
  return (
    <div className="section4">
      <h1 className="section4-heading">How it works</h1>
      <p className="section4-p">
        SorsX captures evert interaction, response and insight in real-time.
        Candidate profiles are enriched and ranked using transparent AI scoring,
        helping you hire confidently now and in the future.
      </p>
      <div className="container">
        <div className="section4-childrens">
          <div className="section4-children1">
            <div className="left-children">
              <img className="frame4" src="./images/frame4.png" alt="frame4" />
              <h1 className="left-children-heading">
                The only thing you will do manually{" "}
              </h1>
              <p className="left-children-p">
                Enter your job description and main elimination questions for
                that role.
              </p>
            </div>
            <div className="right-children">
              <img className="frame3" src="./images/frame3.png" alt="frame3" />
            </div>
          </div>
          <div className="section4-children2">
            <div className="color"></div>
            <div className="left-children2">
              <div className="cover">
                <img
                  className="frame5"
                  src="./images/frame5.png"
                  alt="frame5"
                />
              </div>
              <img className="experience" src="./images/experience.png" />
              <img className="salary" src="./images/salary.png" />
              <img className="driver" src="./images/driver.png" />
            </div>
            <div className="right-children2">
              <img className="frame6" src="./images/frame6.png" alt="frame6" />
              <h1 className="frame6-heading">
                Automated reach out to qualified candidates
              </h1>
              <p className="frame6-p">
                SorsX AI reach out to candidates who match your job. They
                complete a quick AI video interview, answering your elimination
                questions.
              </p>
            </div>
          </div>
          <div className="section4-children3">
            <div className="left-children3">
              <img className="frame7" src="./images/frame7.png" alt="frame7" />
              <h1 className="frame7-heading">Ready-to-hire shortlist</h1>
              <p className="frame7-p">
                Get a list of the best candidates, already ranked. You only
                choose and hire.
              </p>
            </div>
            <div className="right-children3">
              <div className="white-border">
                <img src="./images/frame8.png" alt="frame8" className="frame8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection4;
