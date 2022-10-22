import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header  ">
        <nav class="navbar navbar-expand-lg   ">
          <div class="container my-3">
            <a class="navbar-brand" href="/">
              <img src="Assests/logo.svg" alt="" width={180} />
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item"></li>
                  <li class="nav-item">
                    <Link class="nav-link" to='/technology'>
                      <p className="navfontcolor " >Technology</p>
                    </Link> 
                   
                  </li>{" "}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <Link class="nav-link" to='/community'>
                      <p className="navfontcolor">Community</p>
                    </Link>
                  </li>{" "} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <Link class="nav-link" to='/aboutpage'>
                     <p className="navfontcolor">About</p>
                    </Link>
                  </li>{" "} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                    <p className="navfontcolor">Blog</p>
                    </a>
                  </li>{" "} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      <p className="navfontcolor">Build</p>
                    </a>
                  </li>{" "} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <Link class="nav-link" to="/contact">
                      <p className="navfontcolor">Contact</p>
                    </Link>
                  </li>{" "} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
