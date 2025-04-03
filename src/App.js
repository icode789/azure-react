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
                <li>
                  <a href="https://www.google.com" className="dropdown-item">
                    News
                  </a>
                </li>
                <hr />
                <li>
                  <a href="https://www.google.com" className="dropdown-item">
                    Media Gallery
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com" className="dropdown-item">
                    Contact Media Center
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com" className="dropdown-item">
                    Community Information Center
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item active">
              <a href="https://www.google.com" className="nav-link">
                VENDOR RELATIONS
              </a>
            </li>
            <li className="nav-item active">
              <a href="https://www.google.com" className="nav-link">
                CAREERS
              </a>
            </li>
            <li className="nav-item active">
              <a href="https://www.google.com" className="nav-link">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Carousel */}
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        {/* Indicators/dots */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
        </div>

        {/* The slideshow/carousel */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="img/img1.png"
              alt="img1"
              className="d-block"
              width="305"
              height="236"
            />
          </div>
          <div className="carousel-item">
            <img
              src="img/img2.png"
              alt="img2"
              className="d-block"
              width="305"
              height="236"
            />
          </div>
          <div className="carousel-item">
            <img
              src="img/img3.png"
              alt="img3"
              className="d-block"
              width="305"
              height="236"
            />
          </div>
          <div className="carousel-item">
            <img
              src="img/img4.png"
              alt="img4"
              className="d-block"
              width="304"
              height="236"
            />
          </div>
        </div>

        {/* Left and right controls/icons */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Video Section */}
      <div id="ve">
        <video autoplay muted>
          <source src="ve/SBF.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Box Section */}
      <div className="box">
        <h1>Projects</h1>
        <h2>IN NUMBERS</h2>
        <p>
          A widespread destination that attracts pedestrians,
          <br /> professional and amateur cyclists, and horse riders, alongside
          art <br />
          and culture enthusiasts and eco-friends, <br />
          altogether, on paths and spaces that create a healthy lifestyle.
        </p>
      </div>

      <div className="box">
        <img src="img/p1.png" className="rounded" alt="Cinque Terre" width="500" height="400" />
      </div>
    </div>
  );
}

export default App;
