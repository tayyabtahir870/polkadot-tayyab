import React from "react";

function Teams() {
  return (
    <div>
      <h1 className="parachains-text text-center my-5 ">
        What are teams building on <br /> Polkadot? Just a few examples:
      </h1>

      <div className="container ">
        <div className="row">
          <div className="col my-3 ">
            <div className="card">
              <div className="card-body mb-5">
                <p className="card-text">
                  <b>Smart contract chains</b> with WebAssembly <br /> smart
                  contracts{" "}
                  <a className="link" href="">
                    (Astar,{" "}
                  </a>{" "}
                  <a className="link" href="">
                    Moonbeam)
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col my-3">
            <div className="card">
              <div className="card-body mb-5">
                <p className="card-text">
                  <b>Data curation networks</b> that connect all <br /> file
                  storage chains into curated data sets
                </p>
              </div>
            </div>
          </div>
          <div className="col my-3">
            <div className="card">
              <div className="card-body mb-4">
                <p className="card-text">
                  <b>Oracle chains</b> that make off-chain data <br /> available
                  to all contracts on the Polkadot <br /> network{" "}
                  <a className="link" href="">
                    (ChainLink)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col my-3">
            <div className="card">
              <div className="card-body p-4 ">
                <p className="card-text">
                  <b>Identity chains</b> that link accounts to a <br />{" "}
                  persistent identity and enable access to <br /> other
                  parachains through fewer accounts <br />{" "}
                  <a className="link" href="">
                    (Kilt)
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col my-3">
            <div className="card">
              <div className="card-body p-4">
                <p className="card-text">
                  <b>Financial chains</b> that allow you to hold all <br /> your
                  assets in one portfolio, including via <br /> bridges to
                  Bitcoin, Ethereum, Bitcoin Cash, <br /> Litecoin and ZCash (
                  <a className="link" href="">
                    Acala
                  </a>
                  ,{" "}
                  <a className="link" href="">
                    Parallel
                  </a>{" "}
                  <a className="link" href="">
                    {" "}
                    Finance
                  </a>{" "}
                  )
                </p>
              </div>
            </div>
          </div>
          <div className="col my-3">
            <div className="card">
              <div className="card-body my-3">
                <p className="card-text">
                  <b>Internet of Things chains</b> that set IoT <br /> standards
                  for machine-to-machine <br /> communication ({" "}
                  <a className="link" href="">
                    Robonomics
                  </a>{" "}
                  )
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col my-3">
            <div className="card">
              <div className="card-body my-4">
                <p className="card-text">
                  <b>Zero Knowledge</b> privacy chains, or <br /> bridges to
                  existing ZK-snarks chains
                </p>
              </div>
            </div>
          </div>
          <div className="col my-3">
            <div className="card">
              <div className="card-body my-4">
                <p className="card-text">
                  <b>File storage chains</b> that incentivize storing <br />{" "}
                  data on-chain
                </p>
              </div>
            </div>
          </div>
          <div className="col my-3">
            <div className="card">
              <div className="card-body my-3">
                <p className="card-text">
                  <b>Bridge to Ethereum</b>, allowing Ethereum <br /> smart
                  contracts to interact with the <br /> Polkadot network
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="parachains-text text-center my-5 ">
        Want to get started?
      </h1>

      <div className="container text-center my-5">
        <button className="hero-btn "><b>Build on Polkadot</b></button>
      </div>
    </div>
  );
}

export default Teams;
