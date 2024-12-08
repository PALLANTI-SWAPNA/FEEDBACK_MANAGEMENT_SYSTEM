import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>Student Feedback Management System</h2>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link> {/* Correct link */}
            </li>
            <li>
              <Link to="/about-us">About Us</Link> {/* Correct link */}
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-description">
      </div>
    </nav>
  );
};

export default Navbar;
