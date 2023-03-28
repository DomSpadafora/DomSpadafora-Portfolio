import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mdbhotn', 'template_4abdu0b', form.current, 'CXQuEtMdvDvYM7An0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const successToast = () => toast.success("Message Sent");

  return (
    <form ref={form} onSubmit={sendEmail} >
      <h2>Contact Me</h2>
      <hr></hr>
      <label>Name:</label>
      <input type="text" name="user_name" />
      <label>Email:</label>
      <input type="email" name="user_email" />
      <label >Message:</label>
      <textarea name="message" />
      <button onClick={successToast}>Send</button>
      <Toaster />
    </form>
  );
}

export default ContactForm;