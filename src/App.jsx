import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import RecipeDetails from './pages/RecipeDetails';
import Sushi from './Assets/Sushi.avif';
import pasta from './Assets/pasta.jpeg';
import Tacos from './Assets/Tacos.avif';

const Recipe = ({
  image,
  heading,
  description,
  cookingTime,
  className,
  recipeId
}) => {
  return (
    <div className={`recipe-card ${className}`}>
      <Link to={`/recipe/${recipeId}`}>
        <img src={image} alt="demo" className='recipe-image' />
      </Link>
      <h2>{heading}</h2>
      <p className='description'>{description}</p>
      <span>Cooking Time: {cookingTime}</span>
    </div>
  );
};

const App = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 'pasta',
      title: 'Pasta alla Sorrentina',
      description: 'A classic Italian dish featuring rigatoni, smoked Scamorza, fresh tomatoes, garlic, and basil in a simple yet flavorful sauce',
      ingredients: [
        'Rigatoni',
        'Smoked Scamorza',
        'Fresh tomatoes',
        'Garlic',
        'Basil',
      ],
      steps: [
        'Boil the rigatoni.',
        'Prepare the tomato sauce with garlic and basil.',
        'Mix the pasta with the sauce and add smoked Scamorza.',
        'Bake until golden.',
      ],
      cookingTime: '1 Hour 15 minutes',
      image: pasta,
      className: 'italian-recipe',
    },
    {
      id: 'sushi',
      title: 'Sushi Rolls',
      description: 'Freshly prepared sushi rolls with spicy tuna, crab, and avocado',
      ingredients: [
        'Sushi rice',
        'Nori sheets',
        'Spicy tuna',
        'Crab',
        'Avocado',
      ],
      steps: [
        'Cook the sushi rice.',
        'Spread rice on nori sheet.',
        'Add fillings and roll tightly.',
        'Cut into pieces and serve.',
      ],
      cookingTime: '30 minutes',
      image: Sushi,
      className: 'japanese-recipe',
    },
    {
      id: 'tacos',
      title: 'Tacos al Pastor',
      description: 'Juicy pork tacos with pineapple, onion, and cilantro, served with a side of salsa and lime',
      ingredients: [
        'Pork',
        'Pineapple',
        'Onion',
        'Cilantro',
        'Taco shells',
      ],
      steps: [
        'Marinate the pork.',
        'Cook the pork with pineapple.',
        'Assemble tacos with pork, onion, and cilantro.',
        'Serve with salsa and lime.',
      ],
      cookingTime: '45 minutes',
      image: Tacos,
      className: 'mexican-recipe',
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="recipe-container">
            {recipes.map(recipe => (
              <Recipe
                key={recipe.id}
                image={recipe.image}
                heading={recipe.title}
                description={recipe.description}
                cookingTime={recipe.cookingTime}
                className={recipe.className}
                recipeId={recipe.id}
              />
            ))}
          </div>
        } />
        <Route path="/recipe/:recipeId" element={<RecipeDetails recipes={recipes} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
