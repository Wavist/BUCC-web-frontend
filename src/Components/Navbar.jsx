import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo from "../Images/bucc-logo.svg";
import buccText from "../Images/bucc-text.svg";

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light text-primary bg-white">
      <div className="container-fluid">
        <NavLink exact to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
          <img src={buccText} alt="Babcock University Computer Club" />
        </NavLink>
        <button
          className="navbar-toggler text-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/index" className="nav-link">
                Home
               <center><hr /> </center> 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/programs" className="nav-link">
                Programs
                <center><hr /> </center> 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/events" className="nav-link">
                Events
                <center><hr /> </center> 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About Us
                <center><hr /> </center> 
              </NavLink>
            </li>
            <li className="nav-item">
              <button className="navBtn btn">
                <NavLink to="/contact" className="nav-link text-white">
                  Contact Us
                </NavLink>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
