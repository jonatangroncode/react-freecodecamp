import React from "react";
import "./Forms.css";
const Forms = () => {
  function signUp(formData) {
    console.log("Form submitted");
    const email = formData.get("email");
    const password = formData.get("password");
    const employmentStatus = formData.get("employmentstatues");
    const diataryRestrictions = formData.getAll("diataryRestrictions");
    const favColor = formData.get("favColor");

    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Employment Status: ${employmentStatus}`);
    console.log(`diataryRestrictions: ${diataryRestrictions}`);
    console.log(`favColor: ${favColor}`);
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
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
        />

        <label htmlFor="description">Description: </label>
        <textarea
          name="description"
          id="description"
          defaultValue="This is a description  "
        ></textarea>

        <fieldset>
          <legend>Employment status</legend>
          <label htmlFor="option1" className="radiostyle">
            <input
              type="radio"
              id="option1"
              name="employmentstatues"
              value="unemployed"
            />
            Unemployed
          </label>

          <label htmlFor="option2" className="radiostyle">
            <input
              type="radio"
              id="option2"
              name="employmentstatues"
              value="part-time"
            />
            Part-time
          </label>

          <label htmlFor="option3" className="radiostyle">
            <input
              type="radio"
              id="option3"
              name="employmentstatues"
              value="full-time"
            />
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label htmlFor="option1" className="radiostyle">
            <input
              type="checkbox"
              id="option4"
              name="diataryRestrictions"
              value="kosher "
            />
            Kosher
          </label>

          <label htmlFor="option2" className="radiostyle">
            <input
              type="checkbox"
              id="option5"
              name="diataryRestrictions"
              value="vegan"
            />
            Vegan
          </label>

          <label htmlFor="option3" className="radiostyle">
            <input
              type="checkbox"
              id="option6"
              name="diataryRestrictions"
              value="gluten"
            />
            Gluten
          </label>
        </fieldset>

        <label htmlFor="favColor"></label>
        <select name="favColor" id="favColor" required>
          <option value="" disabled>
            -- Choose a color --
          </option>

          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="grey">Grey</option>
          <option value="violet">Violet</option>
        </select>

        <button>Submit</button>
      </form>
    </section>
  );
};

export default Forms;
