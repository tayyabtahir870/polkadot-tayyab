import React from "react";

function Twitter() {
  return (
    <div className="powering-backcolor">
      <div class="container  ">
        <div class="row">
          <div class="col my-3 ">
            <div className="card">
              <div className="card-body ">
                <div className="d-flex">
                  <img
                    src="https://polkadot.network/assets/img/logos/logo-circle-twitter.svg?v=ea608e625d"
                    alt=""
                    width={60}
                  />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="">
                    <h5 className="my-2">
                      <b>Twitter</b>
                    </h5>
                    <p>Follow @Polkadot.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col my-3">
            <div className="card">
              <div className="card-body ">
                <div className="d-flex">
                  <img
                    src="https://polkadot.network/assets/img/logos/logo-circle-newsletter.svg?v=ea608e625d"
                    alt=""
                    width={60}
                  />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="">
                    <h5 className="my-2">
                      <b>Mailing list</b>
                    </h5>
                    <p>Dont miss updates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col my-3">
            <div className="card">
              <div className="card-body ">
                <div className="d-flex">
                  <img
                    src="https://polkadot.network/assets/img/logos/logo-circle-reddit.svg?v=ea608e625d"
                    alt=""
                    width={60}
                  />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="">
                    <h5 className="my-2">
                      <b>Reddit</b>
                    </h5>
                    <p>Discuss Polkadot news.</p>
                  </div>
                </div>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container  ">
        <div class="row">
          <div class="col my-3 ">
            <div className="card">
              <div className="card-body ">
                <div className="d-flex">
                  <img
                    src="https://polkadot.network/assets/img/logos/logo-circle-discord.svg?v=ea608e625d"
                    alt=""
                    width={60}
                  />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="">
                    <h5 className="my-2">
                      <b>Discord</b>
                    </h5>
                    <p>Discuss with the community.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col my-3">
            <div className="card">
              <div className="card-body ">
                <div className="d-flex">
                  <img
                    src="https://polkadot.network/assets/img/logos/logo-circle-github.svg?v=ea608e625d"
                    alt=""
                    width={60}
                  />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="">
                    <h5 className="my-2">
                      <b>GitHub</b>
                    </h5>
                    <p>Contribute to the codebase.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col my-3">
            <div className="card">
              <div className="card-body ">
                <div className="d-flex">
                  <img
                    src="https://polkadot.network/assets/img/logos/logo-circle-element.svg?v=ea608e625d"
                    alt=""
                    width={60}
                  />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="">
                    <h5 className="my-2">
                      <b>Element chat</b>
                    </h5>
                    <p>Get support.</p>
                  </div>
                </div>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container  ">
        <div class="row">
          <div class="col my-3 "></div>

          <div class="col my-3">
            <div className="card">
              <div className="card-body ">
                <div className="d-flex">
                  <img
                    src="https://polkadot.network/assets/img/logos/logo-circle-documentation.svg?v=ea608e625d"
                    alt=""
                    width={60}
                  />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="">
                    <h5 className="my-2">
                      <b>Documentation</b>
                    </h5>
                    <p>Read and contribute to docs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col my-3">
            <div className="card">
              <div className="card-body ">
                <div className="d-flex">
                  <img
                    src="https://polkadot.network/assets/img/logos/logo-circle-youtube.svg?v=ea608e625d"
                    alt=""
                    width={60}
                  />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="">
                    <h5 className="my-2">
                      <b>Youtube</b>
                    </h5>
                    <p>Watch conferenece videos.</p>
                  </div>
                </div>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>

      <div>
        <h1 className="mb-0 text-center my-5 twitter-txt">
          Run a node and interact with the <br /> Polkadot testnet
        </h1>

        <div class="container ">
          <div class="row">
            <div class="col">
              <p className="twitter-paratext mt-5 ">
                If you'd like to play with Polkadot, you'll need to install{" "}
                <br /> and run the Parity Polkadot client. <br /> Get the client
                at{" "}
                <button className="twitter-btn">Parity’s Polkadot repo</button>
              </p>

              <p className="twitter-paratext my-3">
                Alexander is the current default public testnet for <br />{" "}
                Polkadot. By default, any node running on the Alexander <br />{" "}
                testnet will appear on the{" "}
                <button className="twitter-btn">telemetry.polkadot.io</button>
              </p>
              <p className="twitter-paratext mb-5">
                The testnet allows you to create accounts, propose <br />{" "}
                governance referenda, stake testnet DOT to become a <br />{" "}
                validator or nominate other accounts as validators with <br />{" "}
                your testnet DOT.
              </p>
            </div>

            <div class="col">
              <p className="twitter-paratext mt-5 ">
                Connect your running node to the main <br />{" "}
                <button className="twitter-btn">Polkadot user interface</button>{" "}
                to play around.
              </p>
              <p className="twitter-paratext my-3">
                Get testnet DOT to stake by following these instructions <br />{" "}
                on the <button className="twitter-btn">Polkadot Wiki</button>
              </p>
              <p className="twitter-paratext my-3">
                If you don’t want to run a node, you can still interact with{" "}
                <br /> the network by using{" "}
                <button className="twitter-btn">the explorer</button>
              </p>
              <p className=" twitter-paratext mb-5">
                Before interacting with the testnet, please read this <br /> <button className="twitter-btn">legal
                notice</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Twitter;
