import React from "react";
import "./G.css";
import gs1 from "./../../assets/gs1.png";
import gs2 from "./../../assets/gs2.png";
import gs3 from "./../../assets/gs3.png";
import gs4 from "./../../assets/gs4.png";

const GallaryBox = () => {
  return (
    <>
      <main className="d-flex flex-column align-items-center">
        <div
          id="image-section"
          className="d-flex flex-row justify-content-around"
          style={{ gap: "144px" }}
        >
          <div id="img1">
            <img src={gs1} alt="" style={{ marginTop: "-55px" }} />
          </div>
          <div id="img2">
            <img src={gs2} alt="" />
          </div>
          <div id="img3">
            <img src={gs3} alt="" style={{ marginTop: "-55px" }} />
          </div>
          <div id="img4">
            <img src={gs4} alt="" />
          </div>
        </div>

        {/* Box */}
        <div
          id="box"
          className="d-flex align-items-center px-10 justify-content-between"
          style={{
            width: "1616px",
            height: "256px",
            marginTop: "124px",
            backgroundColor: "#80D1FF",
            borderRadius: "20px",
          }}
        >
          {/* Text Section - Aligned on the left side */}
          <div id="text-section-left-aligned" className="space-y">
            <h1
              className="fw-bold"
              style={{
                fontFamily: "Plus Jakarta Sans",
                marginLeft: "56px",
                fontSize: "40px",
                marginTop: "24px",
              }}
            >
              Start growing with Actyvate today
            </h1>
            <h2
              style={{
                marginLeft: "56px",
                fontSize: "20px",
                color: "#153158",
                marginTop: "24px",
              }}
            >
              Grow and scale your business with an all-in-one lead conversion
              platform.
            </h2>
          </div>

          {/* Button Section - Aligned on the right side */}
          <div
            id="button-section"
            className="d-flex gap-3"
            style={{ marginRight: "56px" }}
          >
            <button
              id="Button1"
              className="fw-semibold px-4 py-2 shadow-sm"
              style={{
                borderRadius: "6px",
                fontSize: "18px",
                backgroundColor: "white",
                color: "#153158",
                borderColor: "white",
                border: "1px solid white",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              Product Review
            </button>
            <button
              id="Button2"
              className="px-4 shadow-sm py-2 fw-semibold"
              style={{
                borderRadius: "6px",
                backgroundColor: "#153158",
                borderColor: "#153158",
                color: "white",
                border: "1px solid #153158",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              Request a Demo
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default GallaryBox;
