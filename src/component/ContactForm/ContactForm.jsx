import React from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
function ContactForm(props) {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_subject: "",
    message: "",
  });

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
      toast.success("Message Sent Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.sendForm(
        "service_ixt7mvc",
        "template_4qfmr0c",
        e.target,
        "RoMiiO_MUSVOpkSw0"
      );

      if (response.status === 200) {
        setFormData({
          from_name: "",
          from_email: "",
          from_subject: "",
          message: "",
        });
        notify("success");
      } else {
        notify("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      notify("error");
    }
  };

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
                value={formData.from_name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-field">
              <input
                required
                placeholder="Email"
                className="input-field"
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-field">
              <input
                required
                placeholder="Subject"
                className="input-field"
                type="text"
                name="from_subject"
                value={formData.from_subject}
                onChange={handleInputChange}
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
                value={formData.message}
                onChange={handleInputChange}
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
