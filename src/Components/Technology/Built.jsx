import React from "react";

function Built() {
  return (
    <div className="built-backcolor">
      <div class="container  ">
        <div class="row">
          <div class="col-md-6">
            <img className="my-5" src="Assests/dg-stack.svg" alt="" />
          </div>

          <div class="col-md-6 my-5">
            <h1 className="built-text my-5">Built with the best technology</h1>
            <p>
              Polkadot’s relay chain is built with Substrate, a
              blockchain-building <br /> framework that is the distillation of
              Parity Technologies’ learnings <br /> building Ethereum, Bitcoin,
              and enterprise blockchains.
            </p>
            <p>
              Polkadot’s state machine is compiled to WebAssembly (Wasm), a
              super <br /> performant virtual environment. Wasm is developed by
              major <br />
              companies, including Google, Apple, Microsoft, and Mozilla, that
              have <br /> created a large ecosystem of support for the standard.
            </p>
            <p>
              Polkadot’s networking uses libp2p, a flexible cross-platform
              network <br /> framework for peer-to-peer applications. Positioned
              to be the standard <br /> for future decentralized applications,
              libp2p handles the peer discovery <br /> and communication in the
              Polkadot ecosystem.
            </p>
            <p>
              The Polkadot runtime environment is being coded in Rust, C++, and{" "}
              <br />
              Golang, making Polkadot accessible to a wide range of developers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Built;
