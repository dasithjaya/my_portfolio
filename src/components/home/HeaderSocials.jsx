import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.linkedin.com/in/dasith-jayanandana-0636581b3/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/dasithjaya"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-square-github"></i>
      </a>
      <a
        href="https://www.facebook.com/chalaka.jaya"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-square-facebook"></i>
      </a>
      <a
        href="https://wa.me/+94713141518"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-square-whatsapp"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
