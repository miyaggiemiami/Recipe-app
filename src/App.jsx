import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
 <header>

  <nav>
    <ul className='navLinks'>
    <img className='logo' src="https://via.placeholder.com/150" alt="logo"/>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </nav>
 </header>
  
  
  );
}



export default App;