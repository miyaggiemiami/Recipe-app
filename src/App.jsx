import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
 <header>
  <img className='logo' src="#" alt="logo" />

  <nav>
    <ul className='navLinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact Us</a></li>

      
    </ul>
  </nav>
 </header>
  
  
  );
}



export default App;