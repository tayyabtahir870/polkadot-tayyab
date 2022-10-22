import React from "react";

function Validator() {
  return (
    <div>
      <div className=" container my-5 ">
        <h1 className="vali-txt">Become a validator</h1>
      </div>

      <div class="container ">
        <div class="row">
          <div class="col">
            <h5 className="join-para1">1. Set up your machine</h5>
            <p>
              In addition to any usual CLI parameters that you run polkadot
              with, you'll need to add an extra two:
            </p>
            <ul className="mb-5">
              <li>
                <strong className="clr">--validator</strong> This tells your
                node to try to validate when it sees itself as a listed <br />
                authority on the network;
              </li>
              <li>
                <strong className="clr">--key SEED</strong> This provides your
                node with a secret key that lets it know whether it's a <br />{" "}
                listed authority on the network, and, if it is, lets it sign
                statements to authorise the <br /> creation of new blocks.
              </li>
            </ul>
          </div>

          <div class="col">
            <h5 className="join-para1">2. Apply to validate</h5>
            <p>
              New validators will be chosen every 24 hours on mainnet. You’ll
              need to <br /> create separate accounts for Controller, Session,
              and Stash keys on the <br />  Polkadot UI <br />
              <a className="link" href="">
                (https://polkadot.js.org/apps/#/ <br /> accounts/create)
              </a>
              . These accounts will be used to represent and control the <br />
              validator node you just set up.
            </p>
            <p>
              Next you will need to get some DOT from the faucet or by asking on <br />
              Element. Assuming you have more DOT than the lowest staked
              validator <br /> or there is an open validator slot, you can register to
              be staked. A step- <br /> by-step guide demonstrating how to set up your
              accounts and bond <br /> your DOT is available on the <a className="link" href="">wiki</a>.
            </p>

            


          </div>
          <div className="text-center">
            <h1 className="vali-txt  mt-5 mb-3">Want to become a validator?</h1>
            <button className="hero-btn mb-5"><b>Read More</b></button>
            <p className="mb-5">You can see validator stats on <a className="link" href="">Telemetry</a>.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Validator;
