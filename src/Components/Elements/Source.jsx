import React from "react";

function Source() {
  return (
    <div className="source-backcolor">
      <div class="container ">
        <div class="row">
          <div class="col my-5">
            <h1 className="footertextcolor-size">
              <b>
                An open-source <br /> protocol built for <br /> everyone
              </b>
            </h1>
          </div>

          <div class="col my-5">
            <p className="source-textcolor ">
              Polkadot is an open-source project founded by the <br />{" "}
              <a className="source-textcolor" href="">
                Web3 Foundation
              </a>{" "}
              .
            </p>
            <p className="source-textcolor">
              Web3 Foundation has commissioned five teams and over <br /> 100
              developers to build Polkadot, including:
            </p>
          </div>
        </div>

        <div class="container text-center ">
          <div class="row">
            <div class="col"><img className="my-5"
          src="https://polkadot.network/assets/img/logos/logo-circle-parity-white.svg?v=ea608e625d"
          alt=""
          width={80}
        /></div>
            <div class="col"> <img className="my-5"
          src="https://polkadot.network/assets/img/logos/logo-circle-chainsafe-white.svg?v=ea608e625d"
          alt=""
          width={80}
        /></div>
            <div class="col"> <img className="my-5"
          src="https://polkadot.network/assets/img/logos/logo-circle-soramitsu-white.svg?v=ea608e625d"
          alt=""
          width={80}
        /></div>
            <div class="col">  <img className="my-5"
          src="https://polkadot.network/assets/img/logos/logo-circle-polkadot-js-white.svg?v=ea608e625d"
          alt=""
          width={80}
        /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Source;
