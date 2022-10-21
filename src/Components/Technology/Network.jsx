import React from "react";

function Network() {
  return (
    <div className="network-bgcolor  text-center p-5">
      <h1 className="footertextcolor netwokr-text mt-5 fw-bold ">Network Glossary</h1>
      <p className="footertextcolor network-paratext mb-5 ">
        Polkadot unites a network of heterogeneous blockchains called parachains <br />
        and parathreads. These chains connect to and are secured by the Polkadot <br />
        Relay Chain. They can also connect with external networks via bridges.
      </p>
    </div>
  );
}

export default Network;
