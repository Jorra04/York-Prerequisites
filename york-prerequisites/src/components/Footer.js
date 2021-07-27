import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (

    <>
      <br></br>
      <br></br>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Jorra Singh | All rights reserved | { }
              <Link className="footer-links" to="/TermsOfService">Terms Of Service</Link> { }
              | <Link className="footer-links" to="/privacy">Privacy</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;