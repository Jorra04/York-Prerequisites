import React, { useEffect, useState } from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Jorra Inc</h4>
            <ul className="list-unstyled">
              <li>321-333-4421</li>
              <li>Vaughan, ON</li>
              <li>123 Street St</li>
            </ul>
          </div>
          <div className="col">
            <h4>Other Stuff</h4>
            <ul className="list-unstyled">
              <li>321-333-4421</li>
              <li>Vaughan, ON</li>
              <li>123 Street St</li>
            </ul>
          </div>
          <div className="col">
            <h4>Other Stuff pt2</h4>
            <ul className="list-unstyled">
              <li>321-333-4421</li>
              <li>Vaughan, ON</li>
              <li>123 Street St</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Jorra Singh | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
