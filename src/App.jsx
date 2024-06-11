

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import RecipeDetails from './pages/RecipeDetails';
import Sushi from './Assets/Sushi.avif';
import pasta from './Assets/pasta.jpeg';
import Tacos from './Assets/Tacos.avif';
import Pizzas from './Assets/Pizza.avif';
import Wings from './Assets/Wings.webp';
import Fatcake from './Assets/Fatcake.jpeg';
import './App.css'; 

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
      description: 'A classic Italian dish featuring rigatoni, smoked Scamorza, fresh tomatoes, garlic',
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
      id: 'wings',
      title: 'Buffalo Wings',
      description: 'Spicy buffalo wings with a tangy sauce, served with celery and blue cheese dressing.',
      ingredients: [
        'Chicken wings',
        'Hot sauce',
        'Butter',
        'Celery',
        'Blue cheese dressing',
      ],
      steps: [
        'Fry the chicken wings.',
        'Mix hot sauce and butter for the sauce.',
        'Toss the wings in the sauce.',
        'Serve with celery and blue cheese dressing.',
      ],
      cookingTime: '30 minutes',
      image: Wings,
      className: 'american-recipe',
    },
    {
      id: 'fatcake',
      title: 'Fatcake',
      description: 'A deliciously indulgent treat made from fried dough and filled with creamy custard.',
      ingredients: [
        'Flour',
        'Sugar',
        'Yeast',
        'Milk',
        'Custard filling',
      ],
      steps: [
        'Prepare the dough.',
        'Fry the dough until golden brown.',
        'Fill with creamy custard.',
        'Dust with powdered sugar before serving.',
      ],
      cookingTime: '1 Hour',
      image: Fatcake,
      className: 'dessert-recipe',
    },
    {
      id: 'pizzas',
      title: 'Arugula Pizzas',
      description: 'Pizzas topped with meat, arugula, and a tangy sauce.',
      ingredients: [
        'Pizza dough',
        'Tomato sauce',
        'Arugula',
        'Meat',
        'Cheese',
      ],
      steps: [
        'Prepare the pizza dough.',
        'Spread tomato sauce on the dough.',
        'Add meat and cheese.',
        'Bake until crust is golden.',
        'Top with fresh arugula before serving.',
      ],
      cookingTime: '45 minutes',
      image: Pizzas,
      className: 'italian-recipe',
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
      <div className="hero-container">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Recipes</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <div className="hero">
          <h1>Stella Clem Recipes</h1>
          <p>Explore our delicious recipes and cooking guides</p>
        </div>
      </div>
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
