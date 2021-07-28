import React, {useState, useEffect} from "react";
import "./Contact.css";






const About = () => {

  const [submitted, setSubmitted] = useState(false);


  const submitFeedback = () => {
    setSubmitted(true);
  }

  if(submitted){
    return (
      <div className="body">
        <h1>Submitted!</h1>
      </div>
    );
  } else {
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
              <textarea className="feedback" cols="30" rows="20" placeholder="Give us some feedback!"></textarea>
            </div>
            <div>
              <button className="submit-feedback" onClick={submitFeedback}>Submit</button>
            </div>
          </div>
        </div>
  
    );
  }

  
};

export default About;
