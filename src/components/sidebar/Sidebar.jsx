import React from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.svg";

const Sidebar = () => {
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
        <img src={Logo} alt="" />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="icon-user"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#edu" className="nav__link">
                <i className="icon-book-open"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#achive" className="nav__link">
                <i className="icon-trophy"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="icon-organization"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#extra" className="nav__link">
                <i className="icon-rocket"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nac__footer">
        <span className="copyright">&copy; 2022 - 2023.</span>
      </div>
    </aside>
  );
};

export default Sidebar;
