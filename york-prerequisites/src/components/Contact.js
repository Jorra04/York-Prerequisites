import React, { useState } from "react";
import "./Contact.css";
import exitButton from "../images/exit.svg"
import checkMark from "../images/checkmark.svg"

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const submitFeedback = () => {
    //update submitted status.
    setSubmitted(!submitted);
  };

  return (
    /*
    if the submitted prop is false, we show the contact form
    else, we show the successfully submitted screen.
    */
    <>
      {!submitted ? (
        <ContactForm submitFeedback={submitFeedback} />
      ) : (
        <ModalPart submitFeedback={submitFeedback} />
      )}
    </>
  );
};

const sendEmail = () => {
  //Send email here.
}

const ContactForm = ({ submitFeedback }) => {
  return (
    <div className="body">
      <div className="header" id="header">
        <h1>Contact Us</h1>
      </div>
      <div className="feedback-body">
        <div>
          <input
            className="name"
            type="text"
            placeholder="Please Enter Your Name..."
            required
          />
        </div>
        <div>
          <input
            className="email"
            type="text"
            placeholder="Please Enter Your Email..."
            required
          />
        </div>
        <div>
          <textarea
            className="feedback"
            cols="30"
            rows="20"
            placeholder="Give us some feedback!"
          ></textarea>
        </div>
        <div>
          <button className="submit-feedback" onClick={() => {
            submitFeedback();
            sendEmail();

          }}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalPart = ({ submitFeedback }) => {
  return (
    <div className="modal-container">
      <div className="modal-component">
        <div className="button-div">
          <img className="exit-button" src={exitButton} onClick={submitFeedback} alt="Exit button closing popup"></img>
        </div>
        <div className="content-div">
          <h1>Submitted Feedback!</h1>
          <p>
            Thank you for your feedback! We will take it under careful
            consideration.
          </p>
          <img className="success-checkmark" src={checkMark} onClick={submitFeedback} alt="Checkmark signifying the submission of feedback"></img>
        </div>
      </div>
    </div>
  );
};

export default Contact;
