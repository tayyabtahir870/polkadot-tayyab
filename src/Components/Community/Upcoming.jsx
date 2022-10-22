import React from "react";

function Upcoming() {
  return (
    <div>
    <div className="upcoming-pic ">
      <div className="container">
        <p className="foundedtext1   ">
          Upcoming <br /> events
        </p>
        <p className="upcoming-para">
          Want to host a Polkadot meetup in your city? Check out <br /> the <a className="upcoming-para" href="">resources
          and guides</a> for hosting your own Polkadot <br /> meetup.
        </p>
        <button className="hero-btn1 m-5 ">
          <b>Host a Polkadot Meetup</b>
        </button>
      </div>

     
      </div>
      <div className="text-center">
      <h1 className="join-txt  mt-5 mb-3 ">
      Get your questions <br /> answered
      </h1>
      <button className="hero-btn mt-4 mb-3"><b>Build on Polkadot</b></button>
      <p className="mb-5">or learn how to <a className="link" href="">build on Polkadot</a>.</p>
    </div>
    </div>
  );
}

export default Upcoming;
