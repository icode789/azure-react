import React from "react"; // Import React
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for styling
import './App.css'; // Custom CSS for additional styles

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
        
        {/* Navbar links and dropdowns */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Dropdown for "WHO WE ARE" */}
            <li className="nav-item active dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                WHO WE ARE
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* Dropdown items for "WHO WE ARE" */}
                <li>
                  <a href="#" className="dropdown-item">About Us</a>
                </li>
                <hr />
                <li>
                  <a href="#" className="dropdown-item">Project Timeline</a>
                </li>
              </ul>
            </li>

            {/* Simple nav item for "DESIGN CODE" */}
            <li className="nav-item active">
              <a href="#" className="nav-link">DESIGN CODE</a>
            </li>

            {/* Simple nav item for "OUR DISTRICTS" */}
            <li className="nav-item active">
              <a href="#" className="nav-link">OUR DISTRICTS</a>
            </li>

            {/* Dropdown for "MEDIA CENTER" */}
            <li className="nav-item active dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MEDIA CENTER
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* Dropdown items for "MEDIA CENTER" */}
                <li><a href="#" className="dropdown-item">News</a></li>
                <hr />
                <li><a href="#" className="dropdown-item">Media Gallery</a></li>
                <li><a href="#" className="dropdown-item">Contact Media Center</a></li>
                <li><a href="#" className="dropdown-item">Community Information Center</a></li>
              </ul>
            </li>

            {/* Simple nav items */}
            <li className="nav-item active">
              <a href="#" className="nav-link">VENDOR RELATIONS</a>
            </li>
            <li className="nav-item active">
              <a href="#" className="nav-link">CAREERS</a>
            </li>
            <li className="nav-item active">
              <a href="#" className="nav-link">CONTACT US</a>
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
          <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
        </div>
        
        {/* Carousel Inner */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img/img1.png" alt="img1" className="d-block" width="305" height="236" />
          </div>
          <div className="carousel-item">
            <img src="img/img2.png" alt="img2" className="d-block" width="305" height="236" />
          </div>
          <div className="carousel-item">
            <img src="img/img3.png" alt="img3" className="d-block" width="305" height="236" />
          </div>
          <div className="carousel-item">
            <img src="img/img4.png" alt="img4" className="d-block" width="304" height="236" />
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

      {/* Video Section */}
      <div id="ve">
        <video autoPlay muted>
          {/* Video sources */}
          <source src="ve/SBF.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          {/* Fallback message for unsupported browsers */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Project Section */}
      <div className="box">
        <h1>Projects</h1>
        <h2>IN NUMBERS</h2>
        {/* Paragraph about projects */}
        <p>
          A widespread destination that attracts pedestrians, professional and amateur cyclists, and horse riders,
          alongside art and culture enthusiasts and eco-friends, altogether, on paths and spaces that create a healthy lifestyle.
        </p>
      </div>

      {/* Image Section */}
      <div className="box">
        {/* Example image */}
        <img src="img/p1.png" className="rounded" alt="Cinque Terre" width="500" height="400" />
      </div>

      <div id="worktest"></div>
    </div>
  );
};

export default App;
