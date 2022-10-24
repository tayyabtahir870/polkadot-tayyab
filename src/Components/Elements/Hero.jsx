import React from "react";
import  { ScrollRotate } from 'react-scroll-rotate';

function Hero() {
  return (
    <div>
      <div class="container my-5">
        <div class="row">
          <div class="col-md-6">
            <h1 className="herotext text-start ">
              The multichain <br /> vision for <br /> Web3 starts <br /> here.
            </h1>
            <p className="hero-paratext text-start">
              Polkadot unites and secures a growing ecosystem of <br />{" "}
              specialized blockchains called parachains. Apps and <br />{" "}
              services on Polkadot can securely communicate across <br />{" "}
              chains, forming the basis for a truly interoperable <br />{" "}
              decentralized web.
            </p>
            <button className="hero-btn text-start"><b>Learn Parachains</b> </button> &nbsp;&nbsp;&nbsp;
            <button className="hero-btn text-start"><b>Learn Cross-Chain</b></button>

            <div></div>
          </div>
         
          <div class="col-md-6 text-center">
            <ScrollRotate>
            <img className="img-fluid heropic" src="https://polkadot.network/assets/img/hero/xcm-animation-inner.png?v=ea608e625d" alt="" width={500} />
            <img className="img-fluid heropic1" src="Assests/outer.svg" alt="" width={500} />
            </ScrollRotate>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
