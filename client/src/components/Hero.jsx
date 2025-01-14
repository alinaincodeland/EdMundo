import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import "./hero.scss";
import RedLines from "../assets/red-rays.png";
import { HashLink } from "react-router-hash-link";
import StripyMan from "../assets/stripy-man.png";

const Hero = () => {
  return (
    <div className="hero">
      <MDBContainer className="hero-section">
        <MDBRow>
          <MDBCol md={7} className="hero-text">
            <h1 className="hero-title">
              Bringing the classroom to you - <br />
              <span className="hero-title-span"> anytime, anywhere!</span>
            </h1>
            <p className="hero-subtitle">
              A virtual playground for students and teachers alike, complete
              with interactive features that allow you to teach and learn just
              as you would in a physical classroom setting.
            </p>
            <HashLink to="/#contact">
              <MDBBtn className="hero-demo-button">Book a free demo</MDBBtn>
            </HashLink>
          </MDBCol>
          <MDBCol md={5} className="col-sm hero-container-image">
            <img src={RedLines} alt="red-lines" className="hero-image-lines" />
            <img
              src={StripyMan}
              alt="receiving-mail"
              className=" hero-image-main"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Hero;
