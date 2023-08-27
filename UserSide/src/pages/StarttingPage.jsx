import React from "react";
import moment from "moment";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import './StartingPage.css'; 

AOS.init({
    duration:'2000'
});

function LandingPage() {
  return (
    <div className="landing-page">
       <marquee style={{ color: "white", fontSize: "40px" }} scrollAmount="15">
        Don't let items go to waste! Share your surplus items with those in need through this.
      </marquee>
      <div className="landing row justify-content-center text-center" style={{marginTop : "250px" }}>
        <div className="col-md-9 my-auto" style={{borderRight:'8px solid white'}}>
          <h2 style={{ color: "orange", fontSize: "130px" }} data-aos='zoom-in'>Items</h2>
          <h1 style={{ color: "white"}} data-aos='zoom-out' >For you</h1>
          <Link to="/userpage"   >
             <button className='btn btn-primary' style={{marginTop : "20px", width:"20%"}}>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
