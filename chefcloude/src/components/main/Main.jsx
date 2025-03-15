import "./Main.css";
import React from "react";

const Main = () => {
  const [ingredients, setIngredients] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form  ">
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
