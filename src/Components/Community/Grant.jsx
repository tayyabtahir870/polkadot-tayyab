import React from "react";

function Grant() {
  return (
    <div className="built-backcolor">
      <div class="container ">
        <div class="row">
          <div class="col my-5">
            <h1 className="built-text mt-5 mb-3">
              Get a grant to build the <br /> Polkadot ecosystem
            </h1>
            <p className="join-para2">
              Web3 Foundation provides grants to steward research and <br />
              development of Polkadot and the Web3 tech stack. The <br />{" "}
              program funds work on runtime modules and parachains, <br />{" "}
              development tools, UI, protocol integrations, maintenance, and{" "}
              <br /> more.
            </p>
            <button className="hero-btn">
              <b>Learn more</b>
            </button>
          </div>

          <div class="col my-5">
            <h1 className="built-text mt-5 mb-3">
              Apply for funding from the <br /> Polkadot treasury
            </h1>
            <p className="join-para2">
              The Polkadot community supports projects that benefit the network{" "}
              <br />
              with funding from the Polkadot treasury, an on-chain pot of DOT
              tokens. <br /> Submit a proposal for a project related to
              software, infrastructure, or <br /> app development, marketing,
              community outreach, educational <br /> initiatives, and more.
            </p>
            <button className="hero-btn">
              <b>Learn more</b>
            </button>
          </div>
        </div>
      </div>

      <div class="container ">
        <div class="row">
          <div class="col"></div>
          <div class="col mb-5">
            <h1 className="built-text mt-1 mb-3">
            Become a Polkadot <br /> Ambassador
            </h1>
            <p className="join-para2">
            Check out the <a className="link" href="">post</a> and apply to join the vibrant polkadot community.
            </p>
            <button className="hero-btn">
              <b>Apply to Become an Ambassadar</b>
            </button>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Grant;
