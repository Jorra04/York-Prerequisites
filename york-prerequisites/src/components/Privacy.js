import React from "react";
import privacyLock from "../images/privacy.png"
import "./Privacy.css"
const Privacy = () => {
  return (
    <>
      <div className="privacy-body">
        <div className="privacy-header" >
          <h1>Privacy Policy</h1>
        </div>
        <br />
        <div className="privacy-paragraphs">
          <img className="privacy-image" src={privacyLock}/>

          <div className="privacy-first-paragraph">
            <p>This application is <span className="privacy-paragraph-bold">does not</span> collect your information. This is simply a personal project that is designed to aid
            in the selection of courses for students (not intended to be the sole resource, see Terms of Service).
            </p>

            <p>When using the <span className="privacy-paragraph-bold">Contact</span> feature of this application, your email may be stored so we can respond accordingly to
            any comments or concerned, however, this information is never used for any other purposes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;