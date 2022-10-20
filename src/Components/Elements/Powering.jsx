import React from "react";

function Powering() {
  return (
    <div className="powering-backcolor ">
      <div className="text-center p-5 ">
        <h1 className="footertextcolor  ">
          <b  >Powering the Polkadot network</b>
        </h1>
        <p className="footertextcolor ">
          The DOT token serves three distinct purposes: <br /> governance over
          the network, staking and bonding.
        </p>
      </div>

      <div class="container">
        <div class="row">
          <div class="col text-center">
            <img
              src="https://polkadot.network/assets/img/icons/home-icon-token-1.svg?v=ea608e625d"
              alt=""
              width={220}
            />
            <h5 className="fw-bold footertextcolor mt-5">Governance</h5>
            <p className="footertextcolor">
              Polkadot token holders have complete <br /> control over the protocol.
              All privileges,<br /> which on other platforms are exclusive <br /> to miners,
              will be given to the Relay <br /> Chain participants (DOT holders), <br />
              including managing exceptional events <br /> such as protocol upgrades
              and fixes.
            </p>
          </div>

          <div class="col text-center">
            <img
              src="https://polkadot.network/assets/img/icons/home-icon-token-2.svg?v=ea608e625d"
              alt=""
              width={220}
            />
            <h5 className="fw-bold footertextcolor mt-5">Staking</h5>
            <p className="footertextcolor">
              Game theory incentivizes token holders <br /> to behave in honest ways.
              Good actors <br /> are rewarded by this mechanism whilst <br /> bad actors will
              lose their stake in the <br /> network. This ensures the network <br /> stays
              secure.
            </p>
          </div>

          <div class="col text-center">
            <img
              src="https://polkadot.network/assets/img/icons/home-icon-token-3.svg?v=ea608e625d"
              alt=""
              width={220}
            />
            <h5 className="fw-bold footertextcolor mt-5">Bonding</h5>
            <p className="footertextcolor">
              New parachains are added by bonding <br /> tokens. Outdated or non-useful <br />
              parachains are removed by removing <br /> bonded tokens. This is a form
              of <br /> proof of stake.
            </p>
          </div>
        </div>
      </div>
      <div className=" text-center">
        <h1 className="footertextcolor mt-5"><b>Learn more about <br /> the DOT token</b></h1>
        <button className="hero-btn my-5" ><b>Discover Dot</b></button>
      </div>
    </div>
  );
}

export default Powering;
