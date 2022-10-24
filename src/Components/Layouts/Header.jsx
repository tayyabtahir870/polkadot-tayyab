import React from "react";
import { Link } from "react-router-dom";
import {AiFillGithub} from 'react-icons/ai'
import {FaDiscord} from 'react-icons/fa'

function Header() {
  return (
    
    <div>
        <div className="header mb-0  ">
        <nav class="navbar navbar-expand-lg   ">
          <div class="container  ">
          {/* <button class="btn dropdown-toggle btn-lng-choice mb-1 mb-lg-0" type="button" id="drop" aria-haspopup="true" aria-expanded="false" contenteditable="false">
                <span class="lng text-uppercase">en</span>
              </button> */}
              <div class="dropdown">
  <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    EN
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">español</a></li>
    <li><a class="dropdown-item" href="#">中文</a></li>
    <li><a class="dropdown-item" href="#">日本語</a></li>
    <li><a class="dropdown-item" href="#">한국어</a></li>
    <li><a class="dropdown-item" href="#">русский</a></li>
    <li><a class="dropdown-item" href="#">Türkçe</a></li>
  </ul>
</div>

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
                  <a id="#lightpaper" href="/Polkadot-lightpaper.pdf" target="_blank" rel="nofollow noopener noreferrer" class="text-small nav-link pl-0 pl-lg-2 pr-1 font-weight-bold" contenteditable="false">Lightpaper</a>
                   
                  </li>{" "}  
                  <li class="nav-item">
                  <a href="/PolkaDotPaper.pdf" target="_blank" rel="nofollow noopener noreferrer" class="text-small nav-link pl-0 pl-lg-2 pr-1 font-weight-bold" contenteditable="false">Whitepaper</a>
                  </li>{" "} 
                  <li class="nav-item">
                  <a href="https://wiki.polkadot.network" target="_blank" rel="nofollow noopener noreferrer" class="text-small nav-link px-2 mr-2 font-weight-bold" contenteditable="false">Wiki</a>
                  </li>{" "} 
                  <li class="nav-item">
                  <a href="https://github.com/paritytech/polkadot" target="_blank" rel="nofollow noopener noreferrer" className="text-dark nav-link px-2 mr-2" contenteditable="false"><AiFillGithub size={30}/></a>
                  </li>{" "}
                  <li class="nav-item">
                    <a href="" className="text-dark nav-link px-2 mr-2"><FaDiscord size={30}/></a>
                  </li>{" "} 
                  <li class="nav-item">
                  <a id="support-link" href="https://support.polkadot.network" target="_blank" rel="nofollow noopener noreferrer" className="text-dark font-weight-bold hero-btn2 nav-link px-2 mr-2 " contenteditable="false">Support</a>
                  </li>{" "} 
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <hr />
      <div className="header   ">
        <nav class="navbar navbar-expand-lg   ">
          <div class="container ">
            <a class="navbar-brand" href="/">
              <img  src="Assests/logo.svg" alt="" width={180} />
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
                    <Link class="nav-link" to="/blog">
                    <p className="navfontcolor">Blog</p>
                    </Link>
                  </li>{" "} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <Link class="nav-link" to="/build">
                      <p className="navfontcolor">Build</p>
                    </Link>
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
