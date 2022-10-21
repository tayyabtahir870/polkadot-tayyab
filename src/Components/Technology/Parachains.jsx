import React from "react";

function Parachains() {
  return (
    <div className="parachains-color text-center ">
      <div className="container p-5">
        <h1 className="parachains-text mb-0 footertextcolor  ">
          {" "}
          Parachains: parallel <br /> transaction processing
        </h1>
      </div>

      <div class="container ">
        <div class="row">
          <div class="col footertextcolor text-start">
            <p className="parachains-paratextsize">
              Parachains are specialized blockchains that connect to Polkadot.
              They will have characteristics specialized for their use cases and
              the ability to control their own governance.
            </p>
            <p className="parachains-paratextsize">
              Interactions on parachains are processed in parallel, enabling
              highly scalable systems.
            </p>
            <p className="parachains-paratextsize">
              Transactions can be spread out across the chains, allowing many
              more transactions to be processed in the same period of time.
            </p>
            <button className="hero-btn1 my-5">Learn more about parachains</button>
          </div>

          <div class="col">
            <p className="footertextcolor  parachain-text">
              <strong>Current method:</strong> <br /> Single transaction
            </p>
            <img src="Assests/parachain-pic.svg" alt="" width={200} />
          </div>

          <div class="col">
            <p className="footertextcolor  parachain-text">
              <strong>Polkadot method:</strong> <br /> Multi parallelized
              transactions
            </p>
            <img src="Assests/parachains-pic2.svg" alt="" width={220} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parachains;
