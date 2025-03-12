import "./Main.css";

const Main = () => {
  const ingredients = ["chicken", "banana", "oregano"];

  return (
    <main>
      <form className="add-ingredient-form  ">
        <input
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g. oregano"
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
