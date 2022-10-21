import React from "react";

function Roadmap() {
  return (
    <div>
      <div className="roadmap-bgcolor  text-center p-5">
        <h1 className="footertextcolor netwokr-text mt-5 p-5 fw-bold ">
          Roadmap
        </h1>
        <p className="footertextcolor network-paratext mb-5 ">
          The launch of Polkadot v1 began in May 2020 with the Relay Chain
          genesis <br /> block and finished in December 2021 with the launch of
          parachains. Several <br /> post-launch developments and  optimizations are
          expected for 2022 and <br /> beyond.
        </p>
        <button className="roadmap-btn my-5">See Launch Roadmap</button>
      </div>
    </div>
  );
}

export default Roadmap;
