import React from "react";
import "./Forms.css";
const Forms = () => {
  return (
    <section>
      <h1>Signup Form</h1>
      <form method="post">
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Joe.doe@hotmail.com"
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" name="password" />
        <br />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default Forms;
