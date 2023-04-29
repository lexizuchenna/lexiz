import { useState } from "react";

import { AppWrap, MotionWrap } from "../../wrappers";
import { client } from "../../client";
import { images } from "../../constants";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">
        Interested in developing cool stuffs like this <br /> Contact M
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="" />
          <a href="mailto:lextechspec@gmail.com" className="p-text">
            lextechspec@gmail
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="" />
          <a href="tel:+2347043696226" className="p-text">
            +2347043696226
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.whatsapp} alt="" />
          <a href="https://wa.me/+2347043696226" className="p-text">
            Click to chat on Whatsapp
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              className="p-text"
              onChange={handleChangeInput}
              name="name"
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              className="p-text"
              onChange={handleChangeInput}
              name="email"
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button className="p-text" type="button" onClick={handleSubmit}>
            {" "}
            {loading ? "Sending ..." : "Send Message"}{" "}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thanks for in reaching out, 😄 <br /> will give you a reply as soon
            as possible
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
