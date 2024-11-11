import React from "react";
import r from "./../../assets/r.png";
import hero1 from "./../../assets/hero1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NewPage.css";

const NewPage = () => {
  return (
    <>
      <main>
        <div
          id="hero-background"
          className="d-flex bg-white w-100"
          style={{
            backgroundImage: `url(${r})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundPositionY: "-70px",
            height: "90vh",
            width: "100%",
            position: "relative",
          }}
        >
          <div
            id="top-container"
            className="d-flex flex-row align-items-center justify-content-between px-4"
          >
            {/* Text Section */}
            <div id="main-text" className="d-flex flex-column">
              <h1
                id="main-text-h1"
                className="fw-bold"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                Empowering Success Through <br /> Creative Solutions and
                Expertise.
              </h1>
              <h2 id="main-text-h2" style={{ fontFamily: "Plus Jakarta Sans" }}>
                Empowering your business to thrive by harnessing targeted lead
                generation strategies that convert potential customers into
                loyal advocates, driving sustainable growth and success.
              </h2>
            </div>

            {/* Image Section */}
            <div id="image-section" className="flex-shrink-0">
              <img src={hero1} id="img" className="w-100 img-fluid" />
            </div>

            {/* Stat Section */}
            <div
              id="stat-section"
              className="d-flex flex-column position-absolute  align-items-center justify-content-center"
            >
              <div
                id="block1"
                className="d-flex flex-column justify-content-center align-items-center bg-white shadow"
              >
                <h1
                  id="block1-h1"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                  className="fw-bold"
                >
                  200+
                </h1>
                <h2
                  id="block1-h2"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                  className="fw-medium"
                >
                  Team Member
                </h2>
              </div>

              <div
                id="block2"
                className="d-flex flex-column justify-content-center align-items-center bg-white shadow"
              >
                <h1
                  id="block2-h1"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                  className="fw-bold"
                >
                  10+
                </h1>
                <h2
                  id="block2-h2"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                  className="fw-medium"
                >
                  Countries
                </h2>
              </div>

              <div
                id="block3"
                className="d-flex flex-column justify-content-center align-items-center bg-white shadow"
              >
                <h1
                  id="block3-h1"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                  className="fw-bold"
                >
                  2300+
                </h1>
                <h2
                  id="block3-h2"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                  className="fw-medium"
                >
                  Customers
                </h2>
              </div>
            </div>

            {/* Who Are We Section */}
          </div>
        </div>
      </main>
    </>
  );
};

export default NewPage;
