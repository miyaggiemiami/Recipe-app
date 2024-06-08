import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import logo from './images/logo.png'
function App() {
  return (
 <header>
  <img src = {logo} className='logo' alt="" />

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