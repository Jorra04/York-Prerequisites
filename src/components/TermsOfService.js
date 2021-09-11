import React from "react";
import "./TermsOfService.css"
import contract from '../images/contract.png'
const TermsOfService = () => {
  return (
    <>
      <div className="terms-of-service-body">
        <div className="terms-of-service-header" >
          <h1>Terms Of Service</h1>
        </div>
        <br />
        <div className="terms-of-service-paragraphs">
          <img className="terms-of-service-image" src={contract} alt="contract image representing terms of service" />
          <br />
          <div className="terms-of-service-first-paragraph">
            <p>This application is in no way affiliated with York University &copy; or any other Univeristy (either Candian or International).
              The intention of this application is to be a tool to aid in understanding what courses <span className="terms-of-service-paragraph-bold">may</span> be requried for
              a given course(s). By using this application, you (the user) accept the terms of service, acknowledging that this application is in
              no way affiliated with York University &copy; or any other Canadian or International University <span className="terms-of-service-paragraph-bold">and</span> that the information
              shown on this site may be out of date and should not be utilized as the sole resource in enrolling in ones courses.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;