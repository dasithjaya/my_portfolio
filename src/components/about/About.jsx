import React from "react";
import "./about.css";
import AboutImg from "../../assets/avatar-2.svg";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              As a dedicated 3rd-year computer science undergraduate, I'm driven
              to expand my skill set while further refining my existing
              abilities. I thrive as a collaborative team player and possess
              effective communication skills, both of which I aim to leverage in
              a professional setting. My commitment to personal and professional
              growth makes me a valuable asset for any team or project.
            </p>

            <div className="about__skills grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Frontend Development</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage fd"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Backend Development</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage bd"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">UI/UX Design</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage ud"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Android Development</h3>
                  <span className="skills__number">55%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage ad"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
