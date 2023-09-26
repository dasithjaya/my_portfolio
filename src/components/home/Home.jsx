import React from "react";
import "./home.css";
import Me from "../../assets/profile.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const CV_URL = window.location.href + "/cv.pdf"

const Home = () => {
  const downloadFileURL = (url) => {
    console.log(url);
    const fileName = url.split("/").pop();
    console.log(fileName);
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name"> Dasith Jayanandana </h1>
        <span className="home__education">
          Undergraduate at UCSC | Web Enthusiast | Android app enthusiast
        </span>
        <HeaderSocials />

        <button
          className="btn"
          onClick={() => {
            downloadFileURL(CV_URL);
          }}
        >
          Download CV
        </button>

        <ScrollDown />
      </div>
      {/* <Shapes /> */}
    </section>
  );
};

export default Home;
