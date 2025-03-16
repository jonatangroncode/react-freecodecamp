import "./Main.css";
import React from "react";

const Main = () => {
  const [ingredients, setIngredients] = React.useState([]);

  function handleSubmit(formData) {
    console.log("Form submitted");
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={handleSubmit} className="add-ingredient-form  ">
        <input
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
