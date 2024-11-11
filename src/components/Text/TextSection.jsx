import React from "react";

const TextSection = () => {
  return (
    <>
      <main>
        <div
          id="side-text-area"
          className="d-flex flex-column mt-5"
          style={{ maxWidth: "923px", marginLeft: "970px", padding: "2rem" }}
        >
          <div id="title-text-side" className="position-relative">
            <h1
              className="fw-bold"
              style={{
                fontSize: "50px",
                color: "#153158",
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              Who Are We
            </h1>
          </div>
          <div id="main-text-sub" className="text-start mt-3">
            <h1
              className="fw-normal"
              style={{
                fontSize: "24px",
                lineHeight: "1.5",
                width: "853px",
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              Empowering your business to thrive by harnessing targeted lead
              generation strategies that convert potential customers into loyal
              advocates, driving sustainable growth and success.
            </h1>
            <h1
              className="fw-normal mt-3"
              style={{
                fontSize: "24px",
                lineHeight: "1.5",
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              Empowering your business to thrive by harnessing targeted lead
              generation strategies that convert potential customers into loyal
              advocates, driving sustainable growth and success.
            </h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default TextSection;
