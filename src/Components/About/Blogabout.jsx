import React from 'react'

function Blogabout() {
  return (
      <div>
      <div className="text-center">
        <h1 className="fw-bold mt-5">From the blog</h1>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col my-5">
            <div class="card">
              <img
                src="https://polkadot.network/content/images/2022/10/image1.png"
                class="card-img-top"
                alt="..."
              />
              <div className="cardbody2 ">
              <p className="text-start fontcolor">Parachain</p>
                <h5 className="card-title text-start fw-bold">First Parachain <br /> Successfully Migrates <br /> from Kusama to <br /> Polkadot</h5>
                <p className="card-text text-start">
                KILT Protocol's migration from Kusama to Polkadot is an important technical milestone and the first parachain migration. Polkadot's 'canary network' model allows Web3 projects to test their technology in a real-world environment before upgrading to stable production networks....
                </p>
                <div className="text-start ">
                <img  src="https://polkadot.network/content/images/2021/12/ghost_avatar_polkadot.png" alt="" width={30} /> &nbsp;&nbsp;&nbsp;
                <span>Polkadot</span>

                </div>
               
              </div>
            </div>
          </div>

          <div class="col my-5">
            <div class="card">
              <img
                src="https://polkadot.network/content/images/2022/09/004-smol.png"
                className="card-img-top"
                alt="..."
              />
              <div className="cardbody2 ">
                <p className="text-start fontcolor">Polkadot</p>
                <h5 className="card-title text-start fw-bold">Polkadot Roadmapbr <br /> Roundup</h5>
                <p className="card-text text-start">
                A proposed roadmap for upcoming developments on Polkadot. Get the latest status on asynchronous backing, parathreads, XCMv3, governance, common-good parachains and more....
                </p>
                <div className="text-start ">
                <img className='img-fluid'  src="https://polkadot.network/content/images/2021/12/ghost_avatar_polkadot.png" alt="" width={30} /> &nbsp;&nbsp;&nbsp;
                <span>Polkadot</span>

                </div>

                
               
              </div>
            </div>
          </div>
          <div class="col my-5">
            <div class="card">
              <img className='img-fluid' src="https://polkadot.network/content/images/2022/08/image1.jpg" class="card-img-top" alt="..." />
              <div class="cardbody2  ">
              <p className="text-start fontcolor">Polkadot</p>
                <h5 className="card-title text-start fw-bold">Sub0, the Polkadot <br /> Developer Conference, <br /> comes to Lisbon in <br /> November</h5>
                <p className="card-text text-start">
                The two-day live sub0 conference will run on November 28th-29th. Featuring keynote presentations, breakout sessions, workshops & side events. Sign up for ticket updates....
                </p>
                <div className="text-start ">
                <img className='img-fluid'  src="https://polkadot.network/content/images/2021/12/ghost_avatar_polkadot.png" alt="" width={30} /> &nbsp;&nbsp;&nbsp;
                <span>Polkadot</span>

                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center" >
      <h1 className="herotext  my-5 ">
      Want to get involved?
            </h1>
            <button className="hero-btn mt-3 mb-5"><b>Join the Community</b></button>
      </div>
    </div>
  )
}

export default Blogabout