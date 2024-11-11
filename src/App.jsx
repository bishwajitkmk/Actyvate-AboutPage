import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NewPage from "./components/new/NewPage";
import HeroSection2 from "./components/Hero2/HeroSection2";
import HeroSection3 from "./components/Hero3/HeroSection3";
import Team from "./components/Team/Team";
import GallaryBox from "./components/GallaryBox/GallaryBox";
import TextSection from "./components/Text/TextSection";

const App = () => {
  return (
    <>
      <main>
        <NewPage />
        <TextSection />
        <div style={{ marginTop: "200px" }}>
          <HeroSection2 />
        </div>
        <div
          style={{
            marginTop: "120px",
            backgroundColor: "rgba(255, 93, 0, 0.02)",
            width: "100%",
            height: "1500px",
          }}
        >
          <HeroSection3 />
        </div>
        <div style={{ marginTop: "120px" }}>
          <Team />
        </div>
        <div style={{ marginTop: "120px", marginBottom: "100px" }}>
          <GallaryBox />
        </div>
      </main>
    </>
  );
};

export default App;
