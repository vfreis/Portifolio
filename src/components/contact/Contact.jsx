import { useState } from "react";
import "./contact.scss";
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("moqyklro");
  if (state.succeeded) {
      return <p>Thanks, I'll reply ASAP</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
      <h2>Contact.</h2>
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
  );
}


export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
      <ContactForm />
          {message && <span>Thanks, I'll reply ASAP :)</span>}
 
      </div>
    </div>
  );
}
