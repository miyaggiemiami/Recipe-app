import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import Sushi from './Assets/Sushi.avif'
import pasta from './Assets/pasta.jpeg'
import Tacos from './Assets/Tacos.avif'
import RecipeDetails './RecipeDetails'
 


const Recipe = ({
  image,
  heading,
  description,
  cookingTime,
  className // optional CSS class for customization
}) => {
  return (
    <div className={`recipe-card ${className}`}>
      <img src={image} alt="demo" className='recipe-image' />
      <h2>{heading}</h2>
      <p className='description'>{description}</p>
      <span>Cooking Time: {cookingTime}</span>
    </div>
  );
};

const App = () => {
  return (
    <div className="recipe-container">
      <Recipe
        image={pasta}
        heading="Pasta alla Sorrentina"
        description="A classic Italian dish featuring rigatoni, smoked Scamorza, fresh tomatoes, garlic, and basil in a simple yet flavorful sauce"
        cookingTime="1 Hour 15 minutes"
        className="italian-recipe" // optional CSS class for customization
      />
      <Recipe
        image={Sushi}
        heading="Sushi Rolls"
        description="Freshly prepared sushi rolls with spicy tuna, crab, and avocado"
        cookingTime="30 minutes"
        className="japanese-recipe" // optional CSS class for customization
      />
      <Recipe
        image={Tacos}
        heading="Tacos al Pastor"
        description="Juicy pork tacos with pineapple, onion, and cilantro, served with a side of salsa and lime"
        cookingTime="45 minutes"
        className="mexican-recipe" // optional CSS class for customization
      />
    </div>
     />
  <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
</BrowserRouter>


  );
};



export default App;