import React from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm(props) {
  const notify = (state) => {
    if (state === "error") {
      toast.error(" Unable to Send Message", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success("Message Send Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,

        progress: undefined,
        theme: "dark",
      });
    }
  };
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ixt7mvc",
        "template_4qfmr0c",
        e.target,
        "RoMiiO_MUSVOpkSw0"
      )
      .then(
        (result) => {
          notify("success");
        },
        (error) => {
          notify("error");
        }
      );
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="form-card1">
        <div className="form-card2">
          <form className="form" onSubmit={sendEmail}>
            <p className="form-heading">Message Me</p>

            <div className="form-field">
              <input
                required
                placeholder="Name"
                className="input-field"
                type="text"
                name="from_name"
              />
            </div>

            <div className="form-field">
              <input
                required
                placeholder="Email"
                className="input-field"
                type="email"
                name="from_email"
              />
            </div>

            <div className="form-field">
              <input
                required
                placeholder="Subject"
                className="input-field"
                type="text"
                name="from_subject"
              />
            </div>

            <div className="form-field">
              <textarea
                required
                placeholder="Message"
                cols="30"
                rows="3"
                className="input-field"
                name="message"
              ></textarea>
            </div>

            <button type="submit" className="sendMessage-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
