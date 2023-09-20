import React from "react";
import "./achive.css";
import Menu from "./Menu";

const Achive = () => {
  return (
    <section className="achive container section" id="achive">
      <h2 className="section__title">Achievements</h2>

      <div className="achive__container grid">
        {Menu.map((val, id) => {
          return (
            <div className="achive__card" key={id}>
              <div className="achive__thumbnail">
                <img src={val.image} alt="" className="achive__img" />
                <div className="achive__mask"></div>
              </div>
              <h3 className="achive__title">{val.title}</h3>
              <a href={val.link} className="achive__button" target="_blank" rel="noreferrer">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achive;
