import React from "react";
import cryp from './images/cryp.png'
const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-primary text-center">About Us</h1>
          <div class="col-lg-6">
            <p className="mt-4" style={{fontSize: "2.3rem", color:"#efef "}}>Crypto tracker is your friendly tracker of all of your crypto currencies. So sit back and relax we got your back</p>
          </div>
          <div class="col-lg-6">
            <img src={cryp} alt="crypto " style={{width: "100%", marginLeft: "15vh"}}/>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
