import React from "react";
import "./project.css";

export const CarouselItem = ({ item, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <div></div>
          <h3 className="project__title">{item.title}</h3>
      <img src={item.logo} alt="" className="project__img" id="project__img1" />
      <div className="project__intro">
        <p className="project__in">{item.description}</p>
      </div>
      <h3 className="tag__name">Technologies: </h3>
      <div className="project__technologies">
        <img src={item.im1} alt="" className="project__techno__img" />
        <img src={item.im2} alt="" className="project__techno__img" />
        <img src={item.im3} alt="" className="project__techno__img" />
        <img src={item.im4} alt="" className="project__techno__img" />
        <img src={item.im5} alt="" className="project__techno__img" />
        <img src={item.im6} alt="" className="project__techno__img" />
      </div>

      <h3 className="tag__name">Contribution: </h3>
      <p className="project__cont">{item.contribution}</p>
      <a href={item.link} className="project__link">
        <i class="fa-brands fa-github"></i>
        <h3 className="link">{item.link}</h3>
      </a>
    </div>
  );
};
