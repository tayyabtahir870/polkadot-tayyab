import React from "react";

function Easybuild() {
  return (
    <div className="footerbackcolor">
      <h1 className=" buildpage-text text-center  mt-5 p-5 ">
        Easily build a Polkadot parachain with <br /> Substrate
      </h1>
      <p className="fontcolor text-center mb-0 join-para">
        Build your application-specific blockchain with the{" "}
        <a className="footertextcolor" href="">
          Substrate
        </a>{" "}
        framework now and easily connect it <br /> to Polkadot after launch.
      </p>

      <div class="container ">
        <div class="row">
          <div class="col my-3">
            <h5 className="buildtext">
              Native Polkadot <br /> compatibility
            </h5>
            <p className="footertextcolor">
              Blockchains built with Substrate are natively <br /> compatible
              with Polkadot, so they can be <br /> easily connected to Polkadot
              as a parachain or <br /> parathread.
            </p>
          </div>
          <div class="col my-3">
            <h5 className="buildtext">Fork-free upgrades</h5>
            <p className="footertextcolor">
              Upgrade your blockchain without a hard fork. <br /> Your runtime
              is a Wasm binary stored on-chain <br /> and can be updated using
              your chain’s <br />
              governance mechanism.
            </p>
          </div>
          <div class="col my-3">
            <h5 className="buildtext">
              Plug-and-play modular <br /> framework
            </h5>
            <p className="footertextcolor">
              Substrate allows you to simply plug in the <br /> functionalities you
              need, while also giving you <br /> the freedom to customize as needed.
            </p>
          </div>
        </div>
      </div>

      <div class="container ">
        <div class="row">
          <div class="col my-3">
            <h5 className="buildtext">Interchain connectivity</h5>
            <p className="footertextcolor">
              By connecting your blockchain to Polkadot, <br /> your blockchain will be
              able to pass arbitrary <br /> messages to other chains in the Polkadot <br />
              network.
            </p>
          </div>
          <div class="col my-3">
            <h5 className="buildtext">Instant security</h5>
            <p className="footertextcolor">
              Simply by connecting your blockchain to <br /> Polkadot, your blockchain
              will be secured by <br /> Polkadot’s <a className="footertextcolor" href="">pooled security</a>.
            </p>
          </div>
          <div class="col my-3">
            <h5 className="buildtext">Multiple languages</h5>
            <p className="footertextcolor">
              With Substrate, you can write your blockchain <br /> logic in any
              language that can compile to <br /> WebAssembly (Rust, C/C++, C#, Go,
              etc).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Easybuild;
