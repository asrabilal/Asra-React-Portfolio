import React from "react";
import NavBar from "../../components/NavBar";
import "./style.css";
import { Link } from "react-scroll";
import pic from "../../img/asrapic.png";

function MainPage() {
  return (
    <div className="row" id="/">
      <NavBar />

      <div className="jumbotron">
        <div className="jumbotron big-banner"></div>
        <div className="intro-text alignCenter">
          <h2 className="mobile-title">Asra Bilal</h2>
          <br></br>
          <div className="me-image col">
             <img src={pic} className="about-photo img-fluid" alt="Me"></img>
            </div>
          <h2 className="intro">Web Developer</h2>
          <br></br>
          <h3>Bringing brands to life through design and interaction.</h3>
          <br></br>
          <br></br>
          <Link to="about"
           activeClass="active"
           spy={true}
           smooth={true}
          >
            <button type="button" className="readMore btn btn-info">
              Read More
            </button>
          </Link>
        </div>
      </div>
      
    </div>
  );
}

export default MainPage;