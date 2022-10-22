import React from "react";

function Touch() {
  return (
    <div className="powering-backcolor">
      <h1 className=" text-center p-5  twitter-txt fw-bold">Get in touch</h1>
      <div class="container  ">
        <div class="row">
          <div class="col my-3 ">
            <div className="card">
              <div className="card-body ">
                <div className="d-flex">
                  <img
                    src="https://polkadot.network/assets/img/logos/logo-circle-chat.svg?v=ea608e625d"
                    alt=""
                    width={60}
                  />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="">
                    <h5 className="my-2">
                      <b>For general chat</b>
                    </h5>
                    <p>Join the Watercooler or Discord</p>
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
                      <b>For press inquiries</b>
                    </h5>
                    <p>Please fill out this form</p>
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
                    src="https://polkadot.network/assets/img/logos/logo-circle-email.svg?v=ea608e625d"
                    alt=""
                    width={60}
                  />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="">
                    <h5 className="my-2">
                      <b>For all other inquiries</b>
                    </h5>
                    <p>support.polkadot.network</p>
                  </div>
                </div>
                <p className="card-text"></p>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div>
       
       

        <div class="container ">
          <div class="row">
            <div class="col-md-6 my-5 ">
              <h1 className="fw-bold footertextcolor">Stay informed of updates <br /> and events</h1>
              <p className="upcoming-para"><a className="footertextcolor" href="">Subscribe to the newsletter</a> or <a className="footertextcolor" href="">read the blog</a> </p>
            </div>
            
              <div className="col-md-1 vl"></div>
                 
            <div class="col-md-5 my-5 ">
            <h1 className="fw-bold footertextcolor">Join the teams building <br /> Polkadot</h1>
            <p className="upcoming-para">See jobs at <a className="footertextcolor" href="">Web3 Foundation</a> or at <a className="footertextcolor" href="">Parity Technologies</a></p>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Touch;
