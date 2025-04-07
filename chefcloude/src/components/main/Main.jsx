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
      {ingredients.length > 0 && (
        <section>
          <h2>Ingredients on hand :</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredients}
          </ul>
          {ingredients.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for recipe?</h3>
                <p>Generate a recipe from the list of ingredients.</p>
              </div>
              <button className="get-recipe-button">Get recipe</button>
            </div>
          )}
        </section>
      )}
    </main>
  );
};

export default Main;
