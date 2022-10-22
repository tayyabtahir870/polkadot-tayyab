import React from "react";

function Web3() {
  return (
    <div>
      <div>
        <h1 class="join-txt text-center my-5 p-5">
          About Polkadot, a <br /> platform for Web3
        </h1>
      </div>
      <div className="powering-backcolor">
        <div class="container ">
          <div class="row">
            <div class="col my-5">
              <h1 className="foundedtext1 mt-5 mb-4">
                The Polkadot <br /> mission
              </h1>
              <p className="upcoming-para mb-5">
                We envision a Web where our identity and our <br /> data is our
                own - safely secured from any <br /> central authority.
              </p>
            </div>
            <div class="col footertextcolor my-5">
              <p className="mt-5 ">
                Polkadot will enable a completely decentralized web where users
                are in <br /> control.
              </p>
              <p>
                Polkadot is built to connect private and consortium chains,
                public and <br /> permissionless networks, oracles, and future
                technologies that are yet <br /> to be created. Polkadot
                facilitates an internet where independent <br /> blockchains can
                exchange information and transactions in a trustless <br /> way
                via the Polkadot relay chain.
              </p>
              <p>
                Polkadot makes it easier than ever to create and connect
                decentralized <br /> applications, services, and institutions.
                By empowering innovators to <br /> build better solutions, we
                seek to free society from its reliance on a <br /> broken web
                where its large institutions can’t violate our trust.
              </p>
              <button className="hero-btn1">
                <b>Learn About the Technology</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Web3;
