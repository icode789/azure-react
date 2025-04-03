import React from 'react';
import './App.css'; // Assuming you have your CSS in the App.css file

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <img
          className="d-inline-block align-top"
          src="https://sportsboulevard.sa/images/Logo.svg"
          alt="Logo"
        />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active dropdown">
              <a
                href="https://www.google.com" // Placeholder link for now
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                WHO WE ARE
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a href="https://www.google.com" className="dropdown-item">
                    About Us
                  </a>
                </li>
                <hr />
                <li>
                  <a href="https://www.google.com" className="dropdown-item">
                    Project Timeline
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item active">
              <a href="https://www.google.com" className="nav-link">
                DESIGN CODE
              </a>
            </li>
            <li className="nav-item active">
              <a href="https://www.google.com" className="nav-link">
                OUR DISTRICTS
              </a>
            </li>

            <li className="nav-item active dropdown">
              <a
                href="https://www.google.com" // Placeholder link for now
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MEDIA CENTER
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li
