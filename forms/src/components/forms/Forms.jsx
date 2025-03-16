import React from "react";
import "./Forms.css";
const Forms = () => {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    event.currentTarget.reset();
  }

  return (
    <section>
      <h1>Signup Form</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Joe.doe@hotmail.com"
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
        />
        <br />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default Forms;
