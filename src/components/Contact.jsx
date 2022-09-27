import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    // add variable info
      .sendForm(
        "service_sbnfqdp",
        "template_sl4o3nj",
        form.current,
        "t4q7TRav8SG696sLg"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent.")
          console.log("message sent!");  
          //resets form after successful submission
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-page">
        <h1>Contact Me</h1>
      <form  className="contact-form" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
