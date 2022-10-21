import React from "react";

function Github() {
  return (
    <div className="powering-backcolor">
      <div class="container ">
        <div class="row">
          <div class="col-md-8 my-5 overflow-hidden">
            <img
              className="img-fluid githubpage-img my-5"
              src="Assests/githubpage.svg"
              alt=""
            />
          </div>

          <div class="col-md-4 my-5 text-ceter footertextcolor">
            <h2 className="fw-bold">Any type of data across any type of blockchain</h2>
            <p>
              Polkadot is a network protocol that <br /> allows arbitrary data—not just <br />
              tokens—to be transferred across <br /> blockchains.
            </p>
            <p>
              This means Polkadot is a true multi-chain <br /> application environment
              where things like <br /> cross-chain registries and cross-chain <br />
              computation are possible.
            </p>
            <p>
              Polkadot can transfer this data across public, <br /> open,
              permissionless blockchains as well as <br /> private, permissioned
              blockchains.
            </p>
            <p>
              This makes it possible to build applications <br /> that get permissioned
              data from a private <br /> blockchain and use it on a public blockchain. <br />
              For instance, a school's private, permissioned <br /> academic records
              chain could send a proof to <br /> a degree-verification smart contract
              on a <br /> public chain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;
