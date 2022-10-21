import React from "react";

function Connecting() {
  return (
    <div>
      <div className="container my-5 ">
        <h1>Connecting the dots</h1>
      </div>

      <div class="container ">
        <div class="row">
          <div class="col my-5">
            <img
              src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-relay-chain.svg?v=ea608e625d"
              alt=""
              width={130}
            />
            <h5 className="fw-bold my-3">Relay Chain</h5>
            <p>
              The heart of Polkadot, responsible <br /> for the network’s shared
              security, <br /> consensus and cross-chainbr <br />{" "}
              interoperability.
            </p>
          </div>

          <div class="col my-5">
            <img
              src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-parachain.svg?v=ea608e625d"
              alt=""
              width={130}
            />
            <h5 className="fw-bold my-3">Parachains</h5>
            <p>
              Sovereign blockchains that can <br /> have their own tokens and{" "}
              <br /> optimize their functionality for <br /> specific use cases.
            </p>
          </div>

          <div class="col my-5">
            <img
              src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-parathread.svg?v=ea608e625d"
              alt=""
              width={130}
            />
            <h5 className="fw-bold my-3">Parathreads</h5>
            <p>
              Similar to parachains but with a <br /> pay-as-you-go model. More{" "}
              <br /> economical for blockchains that <br /> don’t need
              continuous <br /> connectivity to the network.
            </p>
          </div>

          <div class="col my-5">
            <img
              src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-bridge.svg?v=ea608e625d"
              alt=""
              width={130}
            />
            <h5 className="fw-bold my-3">Bridges</h5>
            <p>
              Allow parachains and parathreads <br /> to connect and communicate
              with <br /> external networks like Ethereum <br /> and Bitcoin.
            </p>
          </div>
        </div>
      </div>
      <div className="container my-5 ">
        <h1>Consensus Roles</h1>
      </div>

      <div class="container ">
        <div class="row">
          <div class="col my-5">
            <img
              src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-nominator.svg?v=ea608e625d"
              alt=""
              width={130}
            />
            <h5 className="fw-bold my-3">Nominators</h5>
            <p>
              Secure the Relay Chain by <br /> selecting trustworthy validators{" "}
              <br /> and staking dots.
            </p>
          </div>

          <div class="col my-5">
            <img
              src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-validator.svg?v=ea608e625d"
              alt=""
              width={130}
            />
            <h5 className="fw-bold my-3">Validators</h5>
            <p>
              Secure the relay chain by staking <br /> dots, validating proofs
              from <br /> collators and participating in <br /> consensus with
              other validators.
            </p>
          </div>
          <div class="col my-5">
            <img
              src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-collator.svg?v=ea608e625d"
              alt=""
              width={130}
            />
            <h5 className="fw-bold my-3">Collators</h5>
            <p>
              Maintain shards by collecting <br /> shard transactions from users
              and <br /> producing proofs for validator.
            </p>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <div className="container my-5 fw-bold ">
        <h1>Governance Roles</h1>
      </div>
      <div class="container ">
        <div class="row">
          <div class="col my-5">
            <img
              src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-council-member-2.svg?v=ea608e625d"
              alt=""
              width={130}
            />
            <h5 className="fw-bold my-3">Collators</h5>
            <p>
              Elected to represent passive <br /> stakeholders in two primary <br />
              governance roles: proposing <br /> referenda and vetoing dangerous <br /> or
              malicious referenda.
            </p>
          </div>

          <div class="col my-5">
            <img
              src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-technical-committee-2.svg?v=ea608e625d"
              width={130}
            />
            <h5 className="fw-bold my-3">Technical Committee</h5>
            <p>
              Composed of teams actively <br /> building Polkadot. Can propose <br />
              emergency referenda, together  <br /> with the council, for fast-tracked  <br />
              voting and implementation.
            </p>
          </div>

          <div class="col"></div>

          <div class="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Connecting;
