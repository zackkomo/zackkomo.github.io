import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function Form() {
  /* NEW: Input state handling vvvv */
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };
  /* End input state handling ^^^^ */

  // Server state handling
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setInputs({
        email: "",
        message: "",
      });
    }
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    setServerState({ submitting: true });
    axios({
      method: "POST",
      url: "https://formspree.io/f/{form_id}",
      data: inputs,
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!");
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error);
      });
  };

  return (
    <section className="container-content">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleOnSubmit}>
        <label className="contact-form-el" htmlFor="email">
          Email:
        </label>
        <br></br>
        <input
          id="email"
          type="email"
          name="email"
          required
          onChange={handleOnChange}
          value={inputs.email}
          className="contact-email"
        />
        <br></br>
        <label className="contact-form-el" htmlFor="message">
          Message:
        </label>
        <br></br>

        <textarea
          className="contact-text"
          id="message"
          name="message"
          onChange={handleOnChange}
          value={inputs.message}
        ></textarea>
        <button
          className="contact-form-button"
          type="submit"
          disabled={serverState.submitting}
        >
          Submit
        </button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>
    </section>
  );
}

export default Form;
