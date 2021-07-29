import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const submitFeedback = () => {
    setSubmitted(!submitted);
    //Probably set some email stuff up here...
  };

  return (
    <>
      {!submitted ? (
        <ContactForm submitFeedback={submitFeedback} />
      ) : (
        <ModalPart submitFeedback={submitFeedback} />
      )}
    </>
  );
};

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
          <button className="submit-feedback" onClick={submitFeedback}>
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
        <h1>Submitted Feedback!</h1>
        <p>
          Thank you for your feedback! We will take it under careful
          consideration.
        </p>
        <button onClick={submitFeedback}>X</button>
      </div>
    </div>
  );
};

export default Contact;
