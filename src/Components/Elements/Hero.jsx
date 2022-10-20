import React from "react";

function Hero() {
  return (
    <div>
      <div class="container my-5">
        <div class="row">
          <div class="col">
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
          </div>

          <div class="col text-center">Column</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
