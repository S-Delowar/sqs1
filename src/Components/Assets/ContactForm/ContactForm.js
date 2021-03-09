import React, { useState } from "react";
import "./ContactForm.css";
import { useForm } from "react-hook-form";
import Axios from "axios";

const ContactForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [buttonText, setButtonText] = useState("Send");
  const [sent, setSent] = useState(false);

  const onSubmit = (data, e) => {
    console.log(data);
    setButtonText("...sending");

    Axios.post("http://localhost:4444/sendMessage", data)
      .then((res) => {
        setSent(true);
        e.target.reset();
        alert("Message sent");
        console.log("sending success");
        setButtonText("Send");
      })
      .catch(() => {
        console.log("Message not sent");
        alert("Message not sent. Try again");
        setSent(true);
        e.target.reset();
        setButtonText("Send");
      });
  };

  return (
    <div>
      <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
        <input
          name="name"
          ref={register({ required: true })}
          placeholder="Full Name"
        />
        {errors.name && <small className="error">Please enter your name</small>}

        <input
          name="email"
          ref={register({ required: true })}
          placeholder="Email"
        />
        {errors.email && <small className="error">Please enter your email</small>}

        <input
          name="subject"
          ref={register({ required: true })}
          placeholder="Subject"
        />
        {errors.email && <small className="error">Subject is required</small>}

        <textarea
          name="message"
          ref={register({ required: true })}
          placeholder="Type your message"
        />
        {errors.message && <small className="error">Please type a message</small>}

        <input type="submit" id="send-btn" className="btn btn-primary submit-button" value={buttonText} />
      </form>
    </div>
  );
};

export default ContactForm;
