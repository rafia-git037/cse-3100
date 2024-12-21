import React from "react";

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" required />
        </label>
        <br />
        <label>
          Message:
          <textarea required></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;