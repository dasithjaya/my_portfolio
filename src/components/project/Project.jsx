import React from "react";
import "./project.css";
import image1 from "../../assets/price-1.svg";
import image2 from "../../assets/price-2.svg";

const Project = () => {
  return (
    <section className="project container section">
      <h2 className="section__title">Projects</h2>

      <div className="project__container">
        <div className="project__item">
          <h3 className="project__title">Gardening Hub</h3>
          <p className="project__intro">
            Online web system which provides helps to overcome problems that are
            occurs when home gardening.
          </p>
          <img
            src={image1}
            alt=""
            className="project__img"
            id="project__img1"
          />
          <div className="project__technologies">
            <img src="" alt="" className="project__techno__img" />
            <img src="" alt="" className="project__techno__img" />
            <img src="" alt="" className="project__techno__img" />
            <img src="" alt="" className="project__techno__img" />
            <img src="" alt="" className="project__techno__img" />
            <img src="" alt="" className="project__techno__img" />
            <img src="" alt="" className="project__techno__img" />
          </div>
          <div className="project__link">
            <i class="fa-brands fa-github"></i>
            <h3 className="link">Link</h3>
          </div>
          <p className="project__cont">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            accusamus eos cupiditate eligendi assumenda repudiandae voluptatibus
            temporibus fuga iste nam? Excepturi, voluptatem in. Nam modi unde
            sequi saepe harum optio.
          </p>
        </div>

        <div className="project__item">
          <h3 className="project__title">Gardening Hub</h3>
          <p className="project__intro">
            Online web system which provides helps to overcome problems that are
            occurs when home gardening.
          </p>
          <img
            src={image2}
            alt=""
            className="project__img"
            id="project__img1"
          />
          <div className="project__technologies">
            <img src="" alt="" className="project__techno__img" />
            <img src="" alt="" className="project__techno__img" />
            <img src="" alt="" className="project__techno__img" />
            <img src="" alt="" className="project__techno__img" />
            <img src="" alt="" className="project__techno__img" />
            <img src="" alt="" className="project__techno__img" />
            <img src="" alt="" className="project__techno__img" />
          </div>
          <div className="project__link">
            <i class="fa-brands fa-github"></i>
            <h3 className="link">Link</h3>
          </div>
          <p className="project__cont">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            accusamus eos cupiditate eligendi assumenda repudiandae voluptatibus
            temporibus fuga iste nam? Excepturi, voluptatem in. Nam modi unde
            sequi saepe harum optio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;
