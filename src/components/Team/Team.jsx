import React from "react";
import jas from "./../../assets/jas.png";
import paul from "./../../assets/paul.png";
import david from "./../../assets/david.png";
import james from "./../../assets/james.png";
import g3 from "./../../assets/graphic3.png";
import line from "./../../assets/line.png";
import facebook from "./../../assets/facebook.png";
import x from "./../../assets/x.png";
import linkedin from "./../../assets/linkedin.png";
import "./Team.css";

const Team = () => {
  return (
    <>
      <main>
        <div
          id="header-section"
          className="d-flex align-items-center justify-content-center"
        >
          <h1
            className="fw-bold"
            style={{
              fontFamily: "Plus Jakarta Sans",
              color: "#153158",
              fontSize: "50px",
              marginBottom: "66px",
            }}
          >
            Meet our leadership team
          </h1>
        </div>

        {/* Image Frames */}
        <div
          id="img-frames"
          className="d-flex align-items-center justify-content-center"
          style={{ gap: "39px" }}
        >
          <div
            id="frame1"
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <img
              src={jas}
              alt=""
              style={{
                borderRadius: "20px",
                width: "324px",
                height: "399px",
                objectFit: "cover",
              }}
            />
            <h1
              className="fw-semibold"
              style={{
                marginTop: "20px",
                fontSize: "24px",
                fontFamily: "Plus Plus Jakarta Sans Sans",
                color: "#153158",
              }}
            >
              Jas Saren
            </h1>
            <h2
              className="fw-medium"
              style={{
                fontFamily: "Plus Plus Jakarta Sans Sans",
                color: "#153158",
                opacity: "0.6",
                fontSize: "18px",
                marginTop: "-2px",
              }}
            >
              Cheif Executive Officer
            </h2>
          </div>

          <div
            id="frame2"
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ position: "relative", width: "324px" }}
          >
            <div
              id="gradient-section"
              style={{
                position: "absolute",
                bottom: 84,
                height: "144px",
                width: "100%",
                background:
                  "linear-gradient(to top, rgba(255, 93, 0, 1), rgba(255, 93, 0, 0))",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
                zIndex: 1,
              }}
            >
              <div
                id="logos-container"
                className="d-flex justify-content-center position-relative"
                style={{ height: "100%", position: "relative" }}
              >
                <div
                  id="logos"
                  className="d-flex flex-row align-items-middle position-absolute justify-content-between"
                  style={{ width: "170px", bottom: "28px" }}
                >
                  <img src={facebook} alt="" />
                  <img src={x} alt="" />
                  <img src={linkedin} alt="" />
                </div>
              </div>
            </div>
            <img
              src={paul}
              alt=""
              style={{
                borderRadius: "20px",
                width: "324px",
                height: "399px",
                objectFit: "cover",
              }}
            />
            <h1
              className="fw-semibold"
              style={{
                marginTop: "20px",
                fontSize: "24px",
                fontFamily: "Plus Jakarta Sans",
                color: "#153158",
              }}
            >
              Paul Lehal
            </h1>
            <h2
              className="fw-medium"
              style={{
                fontFamily: "Plus Jakarta Sans",
                color: "#153158",
                opacity: "0.6",
                fontSize: "18px",
                marginTop: "-2px",
              }}
            >
              Chief Technology Officer
            </h2>
          </div>

          <div
            id="frame3"
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <img
              src={david}
              alt=""
              style={{
                borderRadius: "20px",
                width: "324px",
                height: "399px",
                objectFit: "cover",
              }}
            />
            <h1
              className="fw-semibold"
              style={{
                marginTop: "20px",
                fontSize: "24px",
                fontFamily: "Plus Jakarta Sans",
                color: "#153158",
              }}
            >
              David Pitt
            </h1>
            <h2
              className="fw-medium"
              style={{
                fontFamily: "Plus Jakarta Sans",
                color: "#153158",
                opacity: "0.6",
                fontSize: "18px",
                marginTop: "-2px",
              }}
            >
              VP of Product
            </h2>
          </div>

          <div
            id="frame4"
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <img
              src={james}
              alt=""
              style={{
                borderRadius: "20px",
                width: "324px",
                height: "399px",
                objectFit: "cover",
              }}
            />
            <h1
              className="fw-semibold"
              style={{
                marginTop: "20px",
                fontSize: "24px",
                fontFamily: "Plus Jakarta Sans",
                color: "#153158",
              }}
            >
              James Philip
            </h1>
            <h2
              className="fw-medium"
              style={{
                fontFamily: "Plus Jakarta Sans",
                color: "#153158",
                opacity: "0.6",
                fontSize: "18px",
                marginTop: "-2px",
              }}
            >
              VP of Engineering
            </h2>
          </div>
        </div>

        {/* Button */}
        <div
          id="button-seemore"
          className="d-flex align-items-center justify-content-center"
          style={{ marginTop: "69px" }}
        >
          <button
            className="fw-semibold px-8 py-4 rounded-md border-color"
            style={{
              borderWidth: "2px",
              fontFamily: "Plus Jakarta Sans",
              fontSize: "18px",
              color: "#153158",
            }}
          >
            See more
          </button>
        </div>

        <div
          id="graphic"
          className="d-flex align-items-center justify-content-center"
          style={{ marginTop: "93px" }}
        >
          <img src={g3} alt="" />
        </div>
        <div id="line-grpahic" style={{ marginTop: "93px" }}>
          <img src={line} alt="" />
        </div>
      </main>
    </>
  );
};

export default Team;
