import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetails = ({ recipes }) => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find(r => r.id === recipeId);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img  src={recipe.image}  alt={recipe.title}  />
      <p>{recipe.description}</p>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Preparation Steps</h2>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <span>Cooking Time: {recipe.cookingTime}</span>
      <br />
      <button onClick={handleBackClick}>Back to Home Page</button>
      <button onClick={handleBackClick}>Back to Home Page</button>
    </div>
  );
};

export default RecipeDetails;
