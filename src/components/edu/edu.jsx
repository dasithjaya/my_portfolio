import React from "react";
import "./edu.css";

const Edu = () => {
  return (
    <section className="edu container section" id="edu">
      <h2 className="section__title">Education</h2>

      <div className="edu__container grid">
        <div className="timeline grid">
          <div className="timeline__item">
            <i class="fa-solid fa-graduation-cap"></i>
            <div className="timeline_sub">
              <span className="timeline__date">2020 - Present</span>
              <div className="timeline__info">
                <p className="timeline__text">
                  University of Colombo School of Computing
                </p>
                <h3 className="timeline__title">B.Sc in Computer Science</h3>
              </div>
            </div>
          </div>

          <div className="timeline__item">
            <i class="fa-solid fa-book-open"></i>
            <div className="timeline_sub">
              <span className="timeline__date">2010 - 2019</span>
              <div className="timeline__info">
                <p className="timeline__text">Ranabima Royal College</p>
                <h3 className="timeline__title">
                  G.C.E O/L - 8 A’s 1 B (2015)
                </h3>
                <h3 className="timeline__title">G.C.E A/L - B B C (2019)</h3>
              </div>
            </div>
          </div>

          <div className="timeline__item">
            <i class="fa-solid fa-pen"></i>
            <div className="timeline_sub">
              <span className="timeline__date">2005 - 2009</span>
              <div className="timeline__info">
                <p className="timeline__text">
                  Sarasawiuyana College - Peradeniya
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Edu;
