import React from "react"; // Import React
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for styles
import './App.css'; // Import custom CSS for additional styles

const App = () => {
  return (
    <div>
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        {/* Logo */}
        <img
          className="d-inline-block align-top"
          src="https://sportsboulevard.sa/images/Logo.svg"
          alt="Logo"
        />

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Dropdown for "WHO WE ARE" */}
            <li className="nav-item active dropdown">
              <a
                href="https://www.google.com" // Placeholder link for now
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                data-bs-toggle="dropdown" // Bootstrap dropdown functionality
                aria-expanded="false"
              >
                WHO WE ARE
              </a>
              {/* Dropdown Menu Items */}
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

            {/* Other Navbar Items */}
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
          </ul>
        </div>
      </nav>

      {/* Carousel Section */}
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>
        
        {/* Carousel Items */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="img/img1.png" // Image source
              alt="img1"
              className="d-block" // Bootstrap class for image display
              width="305" // Set width
              height="236" // Set height
            />
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default App; // Exporting the component
