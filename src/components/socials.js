import React from "react";

const Socials = () => {
  return (
    <div className="container">
      <div className="row socials">
        <div className="col s3">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/deo-flauren-viray/"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col s3">
          <a target="_blank" href="#">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col s3">
          <a target="_blank" href="https://github.com/dfuviray">
            <i className="fa fa-github-alt" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col s3">
          <a target="_blank" href="https://medium.com/@deo.uviray">
            <i className="fa fa-medium" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
