// About.jsx
import React from 'react';
import AboutUsImage from '../Assets/Background.jpeg'; // Adjust the path as necessary

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <img src={AboutUsImage} alt="About Us" style={{ width: '100%', height: 'auto' }} />
      <p>Welcome to our recipe website! We are passionate about cooking and sharing delicious recipes with you.</p>
      <p>Feel free to explore our collection of mouthwatering dishes from around the world.</p>
    </div>
  );
};

export default About;