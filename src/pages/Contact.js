import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7i7sb2d",
        "template_5xka408",
        form.current,
        "lQ_wgUK1bFsV9vVNm"
      )
      .then(
        () => {
          alert("Your email Successfully sent");
          window.location.reload(false);
        },
        () => {
          alert("Error While sending the Email");
        }
      );
  };

  return (
    <div className="contact-page">
      <h1 className="animate__animated  animate__bounce  home-content">
        For Contact 
      </h1>

      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />

          <div className="submit">
            <input type="submit" value="Send" className="submit-btn" />
            <SendIcon className="send" />
          </div>

        </form>
      </div>

      <br/>

    </div>
  );
};
export default Contact;