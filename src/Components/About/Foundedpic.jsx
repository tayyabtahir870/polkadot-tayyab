import React from "react";

function Foundedpic() {
  return (
    <div>
      <div className="founded-pic">
        <h1 className="container text-center pt-5  mb-0 foundedtext2">
          Founded by some of the <br /> blockchain industry’s <br /> foremost
          builders
        </h1>
      </div>
      <div className="founded-color">
        <div class="container ">
          <div class="row">
            <div class="col my-5 ">
              <div class="card ">
                <div class="cardbody1 p-4">
                  <h5 class="card-title fw-bold">Robert Habermeier</h5>
                  <p>Founder</p>
                  <p class="card-text">
                    Robert Habermeier is a Thiel Fellow and co-founder of
                    Polkadot. He has a research and development background in
                    blockchains, distributed systems, and cryptography. A
                    longtime member of the Rust community, he has focused on
                    leveraging the language’s features to build highly parallel
                    and performant solutions.
                  </p>
                </div>
              </div>
            </div>

            <div class="col my-5">
              <div class="card">
                <div class="cardbody1 p-4">
                  <h5 class="card-title fw-bold">Dr. Gavin Wood</h5>
                  <p>Founder</p>
                  <p class="card-text">
                    Gavin began originating blockchain technology as co-founder
                    and CTO of Ethereum. He invented fundamental components of
                    the blockchain industry, including Solidity,
                    Proof-of-Authority consensus, and Whisper. At Parity, Gavin
                    currently leads innovation on Substrate and Polkadot. He
                    coined the term Web 3.0 in 2014 and serves as President of
                    Web3 Foundation.
                  </p>
                </div>
              </div>
            </div>

            <div class="col my-5">
              <div class="card">
                <div className="cardbody1 p-4">
                  <h5 class="card-title fw-bold">Peter Czaban</h5>
                  <p>Founder</p>
                  <p class="card-text">
                    Peter is the Technology Director of the Web3 Foundation,
                    where he works on supporting the development of the next
                    generation of distributed technologies. He obtained his
                    Masters of Engineering degree at the University of Oxford,
                    reading Engineering Science where he focused on Bayesian
                    Machine Learning. He has worked across defense, finance and
                    data analytics industries, working on mesh networks,
                    distributed knowledge bases, quantitative pricing models,
                    machine learning and business development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-center mb-0 p-5 fw-bold">In the press:</h1>
        <div class="container ">
          <div class="row">
            <div class="col my-5">
              <img
                src="https://polkadot.network/assets/img/logos/logo-techcrunch.svg?v=ea608e625d"
                alt="" width={180}
              />
            </div>

            <div class="col my-5">
              <img
                src="https://polkadot.network/assets/img/logos/logo-wsj.svg?v=ea608e625d"
                alt="" width={120}
              />
            </div>

            <div class="col my-5">
              <img
                src="https://polkadot.network/assets/img/logos/logo-theblock.svg?v=ea608e625d"
                alt="" width={120}
              />
            </div>

            <div class="col my-5">
              <img
                src="https://polkadot.network/assets/img/logos/logo-economist.svg?v=ea608e625d"
                alt="" width={120}
              />
            </div>

            <div class="col my-5">
              <img
                src="https://polkadot.network/assets/img/logos/logo-coindesk.svg?v=ea608e625d"
                alt="" width={180}
              />
            </div>

            <div class="col my-5">
              <img
                src="https://polkadot.network/assets/img/logos/logo-bloomberg.svg?v=ea608e625d"
                alt="" width={180}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foundedpic;
