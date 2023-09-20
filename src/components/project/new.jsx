import React from "react";
import "./project.css";
import image1 from "../../assets/fight_the_bite.png";
import image2 from "../../assets/gardening_hub.png";
import { Carousel } from "./Carousel";

import imgf1 from "../../assets/ftb/react.png";
import imgf2 from "../../assets/ftb/express.png";
import imgf3 from "../../assets/ftb/node.png";
import imgf4 from "../../assets/ftb/mongo.png";
import imgf5 from "../../assets/ftb/flutter.png";
import imgf6 from "../../assets/ftb/webrtc.png";

import imgg1 from "../../assets/gh/html.png";
import imgg2 from "../../assets/gh/css.png";
import imgg3 from "../../assets/gh/javascript.png";
import imgg4 from "../../assets/gh/php.png";
import imgg5 from "../../assets/gh/ajax.png";
import imgg6 from "../../assets/gh/jquery.png";

const Project = () => {
  return (
    <section className="project container section" id="project">
      <h2 className="section__title">Projects</h2>

      <div className="project__container">
        <div className="project__item">
          <h3 className="project__title">Fight The Bite</h3>
          <img
            src={image1}
            alt=""
            className="project__img"
            id="project__img1"
          />
          <p className="project__intro">
            A Dengue Management System that contains both web and mobile
            applications, designed to streamline and enhance the tracking,
            prevention, and treatment of Dengue outbreaks.
          </p>

          <div className="project__technologies">
            <img src={imgf1} alt="" className="project__techno__img" />
            <img src={imgf2} alt="" className="project__techno__img" />
            <img src={imgf3} alt="" className="project__techno__img" />
            <img src={imgf4} alt="" className="project__techno__img" />
            <img src={imgf5} alt="" className="project__techno__img" />
            <img src={imgf6} alt="" className="project__techno__img" />
          </div>
          <div className="project__link">
            <i class="fa-brands fa-github"></i>
            <h3 className="link">Link</h3>
          </div>
          <p className="project__cont">
            Designed the user interfaces for web and mobile applications. As a
            'Doctor' actor in this project, I developed an online video
            conferencing technology to provide virtual medical consultations for
            patients.
          </p>
        </div>

        <div className="project__item">
          <h3 className="project__title">Gardening Hub</h3>
          <img
            src={image2}
            alt=""
            className="project__img"
            id="project__img2"
          />
          <p className="project__intro">
            Online web system which provides helps to overcome problems that are
            occurs when home gardening.
          </p>

          <div className="project__technologies">
            <img src={imgg1} alt="" className="project__techno__img" />
            <img src={imgg2} alt="" className="project__techno__img" />
            <img src={imgg3} alt="" className="project__techno__img" />
            <img src={imgg4} alt="" className="project__techno__img" />
            <img src={imgg5} alt="" className="project__techno__img" />
            <img src={imgg6} alt="" className="project__techno__img" />
          </div>
          <div className="project__link">
            <i class="fa-brands fa-github"></i>
            <h3 className="link">Link</h3>
          </div>
          <p className="project__cont">
            Designed user interfaces and implemented an intuitive dashboard
            interface for sellers, facilitating efficient management of products
            and orders, and designed a rating system for both products and
            sellers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;
