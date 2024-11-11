import React from "react";
import h31 from "./../../assets/h31.png";
import h32 from "./../../assets/h32.png";
import g1 from "./../../assets/graphic1.png";
import g2 from "./../../assets/graphic2.png";

const HeroSection3 = () => {
  return (
    <>
      <main>
        <div id="hero-container">
          <div
            id="frame1"
            className="d-flex flex-row align-items-center justify-content-center"
            style={{ marginLeft: "0px", marginTop: "150px", gap: "100px" }}
          >
            <div
              id="text-sections"
              className="mt-5"
              style={{ marginTop: "150px" }}
            >
              <h1
                id="main"
                className="fw-bold"
                style={{
                  marginTop: "100px",
                  fontSize: "50px",
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                What you can achieve
              </h1>
              <h2
                id="main-2"
                className="font-weight-normal text-secondary opacity-60 mt-4"
                style={{
                  fontSize: "24px",
                  width: "792px",
                  opacity: "0.6",
                  fontFamily: "Plus Jakarta Sans",
                  color: "#153158",
                }}
              >
                Empowering your business to thrive by harnessing targeted lead
                generation strategies that convert potential customers into
                loyal advocates, driving sustainable growth and success.
              </h2>
              <h1
                className="fw-medium"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "24px",
                  marginTop: "32px",
                }}
              >
                Increased Quality Leads
              </h1>
              <h2
                id="main-2"
                className="fw-normal"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "22px",
                  color: "#153158",
                  opacity: "0.6",
                  marginTop: "14px",
                  width: "792px",
                }}
              >
                Attract and engage high-quality prospects that align with your
                ideal customer profile, boosting conversion rates and sales
                opportunities.
              </h2>
              <h1
                className="fw-medium"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "24px",
                  marginTop: "32px",
                }}
              >
                Enhanced Brand Visibility
              </h1>
              <h2
                id="main-2"
                className="fw-normal"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "22px",
                  color: "#153158",
                  opacity: "0.6",
                  marginTop: "14px",
                  width: "792px",
                }}
              >
                Elevate your brand presence in the marketplace, making it easier
                for potential customers to find and connect with you.
              </h2>
              <h1
                className="fw-medium"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "24px",
                  marginTop: "32px",
                }}
              >
                Stronger Customer Relationships
              </h1>
              <h2
                id="main-2"
                className="fw-normal"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "22px",
                  color: "#153158",
                  opacity: "0.6",
                  marginTop: "14px",
                  width: "792px",
                }}
              >
                Build lasting connections with your audience through
                personalized engagement and effective communication strategies.
              </h2>
            </div>

            {/* Image Section */}

            <div id="img-section" style={{ marginTop: "117px" }}>
              <img src={h31} alt="" />
            </div>
            <img
              src={g1}
              alt=""
              className="position-absolute"
              style={{ marginLeft: "1700px", marginTop: "-288px" }}
            />
          </div>
          <img
            src={g2}
            alt=""
            className="position-absolute"
            style={{ marginTop: "55px", marginLeft: "-48px" }}
          />

          {/* Frame 2 */}
          <div
            id="frame2"
            className="d-flex flex-row align-items-center justify-content-center"
            style={{ marginTop: "144px", gap: "100px" }}
          >
            <div id="img-section">
              <img src={h32} alt="" />
            </div>
            <div id="text-section">
              <h1
                className="fw-bold"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  color: "#153158",
                  fontSize: "50px",
                }}
              >
                Mission & Vision
              </h1>
              <h2
                className="fw-medium"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  marginTop: "32px",
                  fontSize: "24px",
                  color: "#153158",
                  opacity: "0.6",
                  width: "792px",
                }}
              >
                Empowering your business to thrive by harnessing targeted lead
                generation strategies that convert potential customers into
                loyal advocates, driving sustainable growth and success.
              </h2>
              <br />
              <h2
                className="fw-medium"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "24px",
                  color: "#153158",
                  opacity: "0.6",
                  width: "792px",
                }}
              >
                Empowering your business to thrive by harnessing targeted lead
                generation strategies that convert potential customers into
                loyal advocates, driving sustainable growth and success.
                Empowering your business to thrive by harnessing targeted lead
                generation strategies that convert potential customers into
                loyal advocates, driving sustainable growth and success.
              </h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection3;
