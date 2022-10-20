import React from "react";

function Cards() {
  return (
    <div>
      <div class="container ">
        <div class="row">
          <div class="col my-5">
            <img
              src="https://polkadot.network/assets/img/icons/home-icon1.svg?v=ea608e625d"
              alt=""
              width={50}
            />{" "}
            <h5 className="fw-bold my-3">True interoperability</h5>
            <p>
              Polkadot enables cross-blockchain transfers <br /> of any type of
              data or asset, not just tokens. <br /> Connecting to Polkadot
              gives you the ability <br /> to interoperate with a wide variety
              of <br /> blockchains in the Polkadot network.
            </p>
          </div>

          <div class="col my-5">
            <img
              src="https://polkadot.network/assets/img/icons/home-icon2.svg?v=ea608e625d"
              alt=""
              width={50}
            />
            <h5 className="fw-bold my-3">Economic & transactional scalability</h5>
            <p>
              Polkadot provides unprecedented economic <br /> scalability by
              enabling a common set of <br /> validators to secure multiple
              blockchains. <br /> Polkadot provides transactional scalability by{" "}
              <br /> spreading transactions across multiple <br /> parallel
              blockchains.
            </p>
          </div>

          <div class="col my-5">
            <img
              src="https://polkadot.network/assets/img/icons/home-icon3.svg?v=ea608e625d"
              alt=""
              width={50}
            />
            <h5 className="fw-bold my-3">Easy blockchain innovation</h5>
            <p>
              Create a custom blockchain in minutes using <br /> the Substrate
              framework. Connect your <br /> chain to Polkadot and get
              interoperability <br />
              and security from day one. This ease of <br /> development helps
              Polkadot's network grow.
            </p>
          </div>
        </div>
      </div>
      <div class="container ">
        <div class="row">
          <div class="col my-5">
            <img
              src="https://polkadot.network/assets/img/icons/home-icon4-b.svg?v=ea608e625d"
              alt=""
              width={50}
            />
            <h5 className="fw-bold my-3">High energy efficiency</h5>
            <p>
              Polkadot consumes a small fraction of the <br /> energy used by
              conventional blockchains <br /> thanks to its next-generation nominated <br />
              proof-of-stake (NPoS) model. Using the <br /> equivalent of ~6.6 US
              households worth of <br /> energy per year, Polkadot has the <br /> lowest
              carbon footprint among proof-of- <br /> stake protocols analyzed in recent
              research.
            </p>
          </div>

          <div class="col my-5">
            <img
              src="https://polkadot.network/assets/img/icons/home-icon5.svg?v=ea608e625d"
              alt=""
              width={50}
            />
            <h5 className="fw-bold my-3">Security for everyone</h5>
            <p>
              Polkadot's novel data availability and validity <br /> scheme allows
              chains to interact with each <br /> other in a meaningful way. Chains
              remain <br /> independent in their governance, but united <br /> in their
              security.
            </p>
          </div>

          <div class="col my-5">
            <img
              src="https://polkadot.network/assets/img/icons/home-icon6.svg?v=ea608e625d"
              alt=""
              width={50}
            />
            <h5 className="fw-bold my-3">User-driven governance</h5>
            <p>
              Polkadot has a sophisticated governance <br /> system where all
              stakeholders have a voice. <br /> Network upgrades are coordinated
              on-chain <br /> and enacted autonomously and without <br /> forking the network,
              ensuring that Polkadot’s <br /> development remains future-proof and <br />
              community-driven.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h5 className="cardtext">Learn more about Polkadot's <br /> technology</h5>
        <button className="hero-btn my-4"><b>Discover Polkadot</b></button>

      </div>
    </div>
  );
}

export default Cards;
