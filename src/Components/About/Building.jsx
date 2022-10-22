import React from "react";

function Building() {
  return (
    <div className="source-backcolor">
      <div class="container ">
        <div class="row">
          <div class="col my-5">
            <h1 className="footertextcolor-size">
              <b>
                Who's building <br /> Polkadot?
              </b>
            </h1>
            <p className="upcoming-para mt-5">
              Polkadot is the flagship project by <br /> Web3 Foundation, a
              Swiss Foundation founded <br /> to facilitate a fully functional
              and user-friendly <br /> decentralized web.
            </p>
          </div>

          <div class="col my-5 p-5">
            <p className="footertextcolor ">
              The Web3 Foundation is partnering with best-in-class entities to
              build <br /> Polkadot and foster development of the services and
              applications that <br /> will run on it.
            </p>
            <p className="footertextcolor">
              Researchers from Inria Paris and ETH Zurich, developers from
              Parity <br /> Technologies, and capital partners from crypto-funds such
              as Polychain <br /> Capital are all working together to develop a
              superlative realization of <br /> Web3, with Polkadot at its core.
            </p>
            <p className="footertextcolor">Web3 Foundation is providing grants for development of the ecosystem.</p>
          </div>
        </div>

        <div class="container text-center ">
          <div class="row">
            <div class="col">
              <img
                className="my-5"
                src="https://polkadot.network/assets/img/logos/logo-circle-parity-white.svg?v=ea608e625d"
                alt=""
                width={80}
              />
            </div>
            <div class="col">
              {" "}
              <img
                className="my-5"
                src="https://polkadot.network/assets/img/logos/logo-circle-chainsafe-white.svg?v=ea608e625d"
                alt=""
                width={80}
              />
            </div>
            <div class="col">
              {" "}
              <img
                className="my-5"
                src="https://polkadot.network/assets/img/logos/logo-circle-soramitsu-white.svg?v=ea608e625d"
                alt=""
                width={80}
              />
            </div>
            <div class="col">
              {" "}
              <img
                className="my-5"
                src="https://polkadot.network/assets/img/logos/logo-circle-polkadot-js-white.svg?v=ea608e625d"
                alt=""
                width={80}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Building;
