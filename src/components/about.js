import React from "react";
import profilePicture from "../images/profile.png";

const About = () => {
  return (
    <section className="row about">
      <div className="col x12 m12 l12">
        <p>Hi, I am</p>
        <h1>
          DEO FLAUREN U. VIRAY <br />
          <span>FRONT-END DEVELOPER</span>
        </h1>
        <p>
          With 3+ years experience in web development both in public and private
          sectors. <br /> Excellent coding knowledge in HTML, CSS, JavaScript,
          and React. <br />A fast learner who loves to consistenly upgrade
          skills.
        </p>
        <button className="btn waves-effect waves-light z-depth-0 ">
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default About;
