import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const notify = () => {
    toast.success("Email sent", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kx78l26",
        "template_pi0z4sm",
        form.current,
        "wUdNXxJIncyrv8Cv-"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Send me an email.</h3>
          <span className="rise__hand">&#9995;</span>
        </div>

        <form
          action=""
          className="contact__form"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="contact__form-group">
            <div className="contact__form-div" id="form__name">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
                id="form__name__sub"
                name="user__name"
              />
            </div>
            <div className="contact__form-div" id="form__email">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
                id="form__email__sub"
                name="user__email"
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Insert your subject"
              name="subject"
            />
          </div>
          <div className="contact__form-div">
            <textarea
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
              name="message"
            ></textarea>
          </div>
          <input
            type="submit"
            className="btn"
            id="mail__btn"
            value="Send Message"
            onClick={notify}
          />
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
