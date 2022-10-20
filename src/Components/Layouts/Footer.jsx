import React from "react";
import {BsTwitter} from 'react-icons/bs'
import {FaRedditAlien} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {FaDiscord} from 'react-icons/fa'
 
function Footer() {
  return (
    <div className="footerbackcolor">
      <div class="container  ">
        <div class="row">
          <div class="col footertextcolor my-5">
             <h5><b>General</b></h5>
             <ul className="list-unstyled">
                <li>About</li>
                <li>Telemetry</li>
                <li>Roadmap</li>
                <li>FAQ</li>
                <li>Support</li>
                <li>Build</li>
                <li>Grants and Bounties</li>
                <li>Careers</li>
             </ul>
          </div>

          <div class="col footertextcolor my-5">
          <h5><b>Technology</b></h5>
             <ul className="list-unstyled">
                <li>Technology</li>
                <li>Staking</li>
                <li>XCM</li>
                <li>Parachains</li>
                <li>Token</li>
                <li>Substrate</li>
                <li>Lightpaper</li>
                <li>Whitepaper</li>
             </ul>
          </div>
          <div class="col footertextcolor my-5">
          <h5><b>Community</b></h5>
             <ul className="list-unstyled">
                <li>Community</li>
                <li>Academy</li>
                <li>Auctions</li>
                <li>Treasury</li>
                <li>Documentation</li>
                <li>Blog</li>
                <li>Brand Assets</li>
                <li>Element Chat</li>
                <li>Medium</li>
             </ul>
          </div>

          <div class="col my-5">
           <BsTwitter color="white" size={35}/> &nbsp;&nbsp;&nbsp;
           <FaRedditAlien color="white" size={35}/> &nbsp;&nbsp;&nbsp;
           <AiFillGithub color="white" size={35}/> &nbsp;&nbsp;&nbsp;
           <AiFillYoutube color="white" size={35}/> &nbsp;&nbsp;&nbsp;
           <FaDiscord color="white" size={35} /> &nbsp;&nbsp;&nbsp;
           <br />
           <br />
           <p className="footertextcolor">Subscribe to the newsletter to hear about Polkadot updates and events.</p>
           <button className="hero-btn"><b>Subcribe</b></button>
          </div>
      
        </div>
        
        </div>
      
    </div>
  );
}

export default Footer;
