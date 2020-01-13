import React from "react";

const Skills = () => {
  return (
    <section className="row skills">
      <h3>WHERE I AM GOOD AT</h3>
      <hr className="left" />
      <div className="clearfix"></div>
      <div className="col s12 m3 lg3">
        <h5>Front-end</h5>

        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Vue</li>
          <li>Express</li>
        </ul>
      </div>

      <div className="col s12 m3 lg3">
        <h5>Back-end </h5>

        <ul>
          <li>Mongod DB</li>
          <li>MySQL</li>
          <li>REST API</li>
          <li>GraphQL</li>
        </ul>
      </div>

      <div className="col s12 m3 lg3">
        <h5>Tools</h5>

        <ul>
          <li>Adobe Illustrator</li>
          <li>Adobe Photoshop</li>
          <li>Adobe XD</li>
        </ul>
      </div>
      <div className="col offset-m3"></div>
    </section>
  );
};

export default Skills;
