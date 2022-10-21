import React from "react";

function Secuirtymodel() {
  return (
    <div>
      <div class="container ">
        <div class="row">
          <div class="col my-5 p-5">
            <h1 className="parachains-text">A better security model</h1>
            <p>
              In both Proof-of-Work and Proof-of-Stake systems, blockchains{" "}
              <br />
              compete with each other over resources to secure their networks,
              and <br /> blockchains are easily attacked until they develop a
              significant <br /> community to support their network.
            </p>
            <p>
              Polkadot takes a different approach by letting blockchains pool
              their <br /> security, which means that the blockchains' security
              is aggregated and <br /> applied to all.
            </p>
            <p>
              By connecting to Polkadot, blockchain developers can secure their{" "}
              <br />
              blockchain from day one.
            </p>
          </div>

          <div className="col-md-6 my-5 p-5">
            <img
              src="https://polkadot.network/assets/img/dg-security-model.svg?v=ea608e625d"
              alt=""
              width={250}
            />
          </div>
        </div>
      </div>

      <div class="container ">
        <div class="row">
          <div className="col-md-6 my-5 text-center ">
            <img
              src="https://polkadot.network/assets/img/dg-xcm.svg?v=ea608e625d"
              alt=""
              width={250}
            />
          </div>

          <div class="col-md-6 my-5 ">
            <h1 className="parachains-text">
              XCM: a secure cross-chain <br /> communication standard
            </h1>
            <p>
              For blockchains to work together and form the basis of Web3, they{" "}
              <br />
              need a common language for communication. Polkadot sets the <br />
              standard with XCM, a cross-consensus communication format and{" "}
              <br />
              programming language that allows blockchains of different designs{" "}
              <br />
              to securely exchange arbitrary data, code, and value. In this way,
              a new <br /> wave of rich cross-chain applications and services
              can be built that tap <br /> into the features and benefits of
              different chains.
              <br />
              <a className="link" href="">Learn more about XCM</a>
            </p>
          </div>
        </div>
      </div>

      <div class="container ">
        <div class="row">
          <div class="col my-5 p-5">
            <h1 className="parachains-text">
              A green, energy-efficient protocol
            </h1>
            <p>
              It’s hard to get behind blockchain as the next technological
              revolution <br /> when it wastes so much energy. Polkadot is
              designed to power the <br /> web’s next big wave of innovation,
              without the high energy consumption <br /> of conventional
              proof-of-work blockchains.
            </p>

            <p>
              Polkadot’s Nominated Proof-of-stake (NPoS) model uses a small{" "}
              <br />
              fraction of the energy consumed by conventional blockchains, and
              has <br /> the <a className="link" href="">lowest carbon footprint</a> among
              proof-of-stake protocols analyzed in <br />{" "}
              <a className="link" href="">recent research</a>.
            </p>
          </div>
          <div className="col-md-6 my-5 p-5">
            <img
              src="https://polkadot.network/assets/img/dg-green-energy.svg?v=ea608e625d"
              alt=""
              width={250}
            />
          </div>
        </div>
      </div>

      <div class="container ">
        <div class="row">
          <div class="col-md-6 my-5 text-center">
            <img
              src="https://polkadot.network/assets/img/dg-governance.svg?v=ea608e625d"
              alt=""
              width={250}
            />
          </div>
          <div class="col-md-6 my-5">
            <h1 className="parachains-text">
              Transparent on-chain <br /> governance
            </h1>
            <p>
              Updates to the protocol happen fork-free via transparent on-chain{" "}
              <br /> voting, so protocol development never stalls due to the
              lack of a clear <br /> process. The relay chain uses a
              sophisticated governance mechanism <br /> that is designed to
              establish a transparent, accountable and binding <br /> process
              for resolving disputes and upgrading the network.
            </p>
            <p>
              DOT tokens are used to participate in governance decisions,
              including <br /> tabling proposals, voting, and bonding.
            </p>
            <p>
              Parachains are free to design their own governance mechanisms,{" "}
              <br />
              allowing for maximum freedom without affecting other parachains.
            </p>
            <a className="link" href="">Learn more about Polkadot’s governance</a>
          </div>
        </div>
      </div>

      <div class="container ">
        <div class="row">
          <div class="col my-5 p-5">
            <h1 className="parachains-text">
              On-chain treasury for decentralized project funding
            </h1>
            <p>
              Polkadot’s governance system also features an on-chain treasury
              that <br /> the community can use to fund projects that benefit
              the network. Any <br /> DOT holder can submit project funding and
              bounty proposals, and can <br /> nominate community members for
              tips based on work completed.
            </p>
            <p>
              With tens of millions of DOT available for spending, the treasury{" "}
              <br />
              represents a powerful resource for fueling Web3 innovation.
            </p>
            <a className="link" href="">Learn more about the Polkadot treasury</a>
          </div>

          <div class="col-md-6 my-5 p-5">
            <img
              src="https://polkadot.network/assets/img/dg-treasury.svg?v=ea608e625d"
              alt=""
              width={250}
            />
          </div>
        </div>
      </div>

      <div class="container ">
        <div class="row">
          <div class="col-md-6 my-5 text-center">
            <img
              src="https://polkadot.network/assets/img/dg-consensus.svg?v=ea608e625d"
              alt=""
              width={250}
            />
          </div>
          <div class="col-md-6 my-5 ">
            <h1 className="parachains-text">
              GRANDPA: a trustworthy <br /> consensus algorithm
            </h1>
            <p>
              Polkadot uses its original GRANDPA (GHOST-based Recursive Ancestor <br />
              Deriving Prefix Agreement) consensus for a more secure and
              resilient <br /> network.
            </p>
            <p>
              Under good network conditions, GRANDPA can finalize blocks nearly <br />
              instantly. Under bad network conditions, like a network partition, <br />
              GRANDPA can finalize large quantities of blocks (theoretically
              millions)  <br /> at once when the partitions resolve.
            </p>
            <a className="link" href="">Learn more about GRANDPA.</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secuirtymodel;
