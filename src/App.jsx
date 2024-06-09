import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import Sushi from './Assets/Sushi.avif'
import pasta from './Assets/pasta.jpeg'
import Tacos from './Assets/Tacos.avif'
import Recipe from './Recipe'
import Lobster from './Assets/Lobster.jpeg'
import Oysters from './Assets/Oysters.jpeg'
import Pizzas from './Assets/Pizza.avif'
import Urdaburger from './Assets/Urdaburger.avif'
import Fatcake from './Assets/Fatcake.jpeg'
import Wings from './Assets/Wings.webp'
import Toast from './Assets/Toast.jpeg'
import Mgodu from './Assets/Mgodu.webp'
import Muffins from './Assets/Muffins.webp'


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

      <Recipe
        image={Lobster}
        heading="Lobster Thermidor"
        description="A luxurious seafood dish made with lobster, butter, and cognac."
        cookingTime="45 minutes"
        className="mexican-recipe" // optional CSS class for customization
      />

      <Recipe
        image={Oysters}
        heading="Oysters Rockefeller"
        description="Oysters topped with spinach, herbs, and a rich cream sauce."
        cookingTime="45 minutes"
        className="mexican-recipe" // optional CSS class for customization
      />
      <Recipe
        image={Pizzas}
        heading="Arugula Pizzas"
        description="pizzas topped with meat, arugula, and a tangy sauce.s"
        cookingTime="45 minutes"
        className="mexican-recipe" // optional CSS class for customization
      />

    <Recipe
        image={Urdaburger}
        heading="Pasta alla Sorrentina"
        description="A classic Italian dish featuring rigatoni, smoked Scamorza, fresh tomatoes, garlic, and basil in a simple yet flavorful sauce"
        cookingTime="1 Hour 15 minutes"
        className="italian-recipe" // optional CSS class for customization
      />
      <Recipe
        image={Wings}
        heading="Buffalo Wings"
        description="Freshly prepared sushi rolls with spicy tuna, crab, and avocado"
        cookingTime="30 minutes"
        className="japanese-recipe" // optional CSS class for customization
      />
      <Recipe
        image={Toast}
        heading="Cheese tomato toast"
        description="Juicy pork tacos with pineapple, onion, and cilantro, served with a side of salsa and lime"
        cookingTime="45 minutes"
        className="mexican-recipe" // optional CSS class for customization
      />

      <Recipe
        image={Fatcake}
        heading="Fatcake"
        description="Juicy pork tacos with pineapple, onion, and cilantro, served with a side of salsa and lime"
        cookingTime="45 minutes"
        className="mexican-recipe" // optional CSS class for customization
      />

      <Recipe
        image={Mgodu}
        heading="Mala Mogodu"
        description="Juicy pork tacos with pineapple, onion, and cilantro, served with a side of salsa and lime"
        cookingTime="45 minutes"
        className="mexican-recipe" // optional CSS class for customization
      />
      <Recipe
        image={Muffins}
        heading="Chocolate Muffins"
        description="Juicy pork tacos with pineapple, onion, and cilantro, served with a side of salsa and lime"
        cookingTime="45 minutes"
        className="mexican-recipe" // optional CSS class for customization
      />
    </div>
  );
};




export default App;