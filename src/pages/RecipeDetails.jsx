import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetails = ({ recipes }) => {
  const { recipeId } = useParams();
  const recipe = recipes.find(r => r.id === recipeId);
  const navigate = useNavigate();

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className='detail-page'>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className='clement'/>
      <p>{recipe.description}</p>


      <h2  className='start's>Ingredients</h2>
      <p>
      {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </p>
      <h2  className='start'>Instructions</h2>
     <p>
     {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
     </p>
      <span>Cooking Time: {recipe.cookingTime}</span>
      <button onClick={handleBackClick} className='back-button'>Back to Home Page</button>
      
    </div>
  );
};

export default RecipeDetails;
