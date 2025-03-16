import React from "react";
import "./Forms.css";
const Forms = () => {
  function signUp(formData) {
    console.log("Form submitted");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  }

  return (
    <section>
      <h1>Signup Form</h1>
      <form action={signUp}>
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
