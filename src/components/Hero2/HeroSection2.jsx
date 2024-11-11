import React from "react";
import "./HeroSection2.css";
import value from "./../../assets/value.png";
import innovation from "./../../assets/innovation.png";
import client from "./../../assets/client.png";
import result from "./../../assets/result.png";

const HeroSection2 = () => {
  return (
    <>
      <main>
        <div
          id="hero-section-2"
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <div id="heading" className="d-flex flex-column">
            <h1
              id="heading-h1"
              className="d-flex flex-column justify-content-center fw-bold"
            >
              Our core values guide how we work
            </h1>
          </div>

          {/* Subsection 1 */}
          <div
            id="subsection-group"
            className="d-flex flex-row justify-content-between"
          >
            <div id="sub1">
              <div id="icon" className="d-flex ">
                <img src={value} id="icon-value" />
              </div>
              <div id="sub-heading" className="fw-semibold">
                Integrity
              </div>
              <div id="details" className=" fw-normal ">
                Explore various articles, videos, and other materials to learn
                about the functionality of Actyvate.
              </div>
            </div>

            <div id="sub2">
              <div id="icon" className="d-flex ">
                <img src={innovation} id="icon-value" />
              </div>
              <div id="sub-heading" className="fw-semibold">
                Integrity
              </div>
              <div id="details" className=" fw-normal ">
                Explore various articles, videos, and other materials to learn
                about the functionality of Actyvate.
              </div>
            </div>

            <div id="sub3">
              <div id="icon" className="d-flex ">
                <img src={client} id="icon-value" />
              </div>
              <div id="sub-heading" className="fw-semibold">
                Integrity
              </div>
              <div id="details" className=" fw-normal ">
                Explore various articles, videos, and other materials to learn
                about the functionality of Actyvate.
              </div>
            </div>

            <div id="sub4">
              <div id="icon" className="d-flex ">
                <img src={result} id="icon-value" />
              </div>
              <div id="sub-heading" className="fw-semibold">
                Integrity
              </div>
              <div id="details" className=" fw-normal ">
                Explore various articles, videos, and other materials to learn
                about the functionality of Actyvate.
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection2;
