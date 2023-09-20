import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Send me an email.</h3>
          <span className="rise__hand">&#9995;</span>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div" id="form__name">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
                id="form__name__sub"
              />
            </div>
            <div className="contact__form-div" id="form__email">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
                id="form__email__sub"
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Insert your subject"
            />
          </div>
          <div className="contact__form-div">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button className="btn" id="mail__btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
