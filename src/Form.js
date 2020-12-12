import React from "react";
import "./App.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <section className="container-content">
        <h1>Contact Us</h1>
        <form
          className="contact-form"
          onSubmit={this.submitForm}
          action="https://formspree.io/f/xpzyeeay"
          method="POST"
        >
          <label className="contact-form-el" htmlFor="email">
            Email:
          </label>
          <br></br>
          <input
            id="email"
            type="email"
            name="email"
            required
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
          ></textarea>

          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <button className="contact-form-button" type="submit">
              Submit
            </button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </section>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
