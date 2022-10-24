import React from "react";

function Substrate() {
  return (
    <div>
      <h1 className="buildtext1  my-5 text-center ">
        Tools that come with Substrate
      </h1>

      <div class="container">
        <div class="row">
          <div class="col my-5">
            <div className="card">
              <div className="card-body ">
                <div className="d-flex">
                  <div className="">
                    <h5 className="my-2 fontcolor ">
                      <b>
                        Polkadot Telemetry <br /> Service
                      </b>
                    </h5>
                    <p>Network information</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col my-5">
            <div className="card">
              <div className="card-body ">
                <div className="d-flex">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="">
                    <h5 className="my-2 fontcolor">
                      <b>
                        Substrate and Polkadot <br /> UI
                      </b>
                    </h5>
                    <p>Built with React.js and RxJS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col my-5">
            <div className="card">
              <div className="card-body ">
                <div className="d-flex">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="">
                    <h5 className="my-2 fontcolor">
                      <b>Substrate UI</b>
                    </h5>
                    <p>Built with the Bonds oo7 library</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col mb-5">
            <div className="card">
              <div className="card-body ">
                <div className="d-flex">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="">
                    <h5 className="my-2 fontcolor">
                      <b>Polkabot</b>
                    </h5>
                    <p>Network monitoring and reporting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div className="card">
              <div className="card-body ">
                <div className="d-flex">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="">
                    <h5 className="my-2 fontcolor">
                      <b>Polkascan</b>
                    </h5>
                    <p>Blockchain data explorer and analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col mt-2"></div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="buildtext1  my-5  ">
          Start building your custom <br /> parachain with Substrate
        </h1>
        <button className="hero-btn my-5">
          <b>Substrate Developer Hub</b>
        </button>
        <p className="my-5">
          or{" "}
          <a className="link " href="">
            learn More
          </a>
          .
        </p>
      </div>

      <div class="container">
        <div class="row">
          <div class="col my-5 ">
            <h1 className="buildtext1    ">
            Get a grant to build the <br /> Polkadot ecosystem
            </h1>
            <p className="parachains-paratextsize">
              Web3 Foundation provides grants to steward <br /> research and
              development of Polkadot and the <br /> Web3 tech stack. The program funds
              work on <br /> runtime modules and parachains, development <br /> tools, UI,
              protocol integrations, maintenance, and <br /> more.
            </p>
            <button className="hero-btn"><b>Learn more</b>
            </button>
          </div>
          <div class="col my-5">
            <ul className="parachains-paratextsize">
                <li>Development and deployment tooling (e.g. IDEs, <br /> parachain development kits)</li>
                <li>Polkadot Runtime Modules (e.g. interoperability, <br /> governance)</li>
                <li>Second layer protocols (e.g. dedicated parachains, <br /> state channels)</li>
                <li>Monitoring (e.g. explorers)</li>
                <li>Protocol integrations (e.g. bridges to other blockchains, <br /> distributed file storage)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center">
      <h1 className="buildtext1  my-5 ">
      Have a question about <br /> building on Polkadot?  
      </h1>
      <button className="hero-btn mb-5"><b>Let's Connect</b></button>
      </div>
    </div>
  );
}

export default Substrate;
