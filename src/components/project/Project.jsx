import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import "./project.css";
export const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Fight The Bite",
      logo: require("../../assets/fight_the_bite.png"),
      description:
        "A Dengue Management System that contains both web and mobile applications, designed to streamline and enhance the tracking, prevention, and treatment of Dengue outbreaks.",
      im1: require("../../assets/ftb/react.png"),
      im2: require("../../assets/ftb/express.png"),
      im3: require("../../assets/ftb/node.png"),
      im4: require("../../assets/ftb/mongo.png"),
      im5: require("../../assets/ftb/flutter.png"),
      im6: require("../../assets/ftb/webrtc.png"),
      link: "https://github.com/Dilanka2000/FIGHT_THE_BITE_Web_Frontend",
      contribution:
        "Designed the user interfaces for web and mobile applications. As a 'Doctor' actor in this project, I developed an online video conferencing technology to provide virtual medical consultations for patients.",
    },
    {
      title: "Gardening Hub",
      logo: require("../../assets/gardening_hub.png"),
      description:
        "An online web system which provides helps to overcome problems that are occurs when home gardening.",
      im1: require("../../assets/gh/html.png"),
      im2: require("../../assets/gh/css.png"),
      im3: require("../../assets/gh/javascript.png"),
      im4: require("../../assets/gh/php.png"),
      im5: require("../../assets/gh/ajax.png"),
      im6: require("../../assets/gh/jquery.png"),
      link: "https://github.com/Shashee99/gardening_hub",
      contribution:
        "Designed user interfaces and implemented an intuitive dashboard interface for sellers, facilitating efficient management of products and orders, and designed a rating system for both products and sellers.",
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <section className="project container section" id="project">
      <h2 className="section__title">Projects</h2>
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {items.map((item) => {
            return <CarouselItem item={item} width={"100%"} />;
          })}
        </div>

        <div className="carousel-buttons">
          <button
            className="button-arrow"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <span class="material-symbols-outlined">
              <i class="fa-solid fa-circle-chevron-left"></i>
            </span>{" "}
          </button>
          <button
            className="button-arrow"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <span class="material-symbols-outlined">
              <i class="fa-solid fa-circle-chevron-right"></i>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
