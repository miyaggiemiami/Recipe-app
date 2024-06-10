// About.jsx
import React from 'react';
import AboutUsImage from '../Assets/Background.jpeg'; // Adjust the path as necessary

const About = () => {
  return (
    <section className="about-us">
    <header>
      <h1>About Us</h1>
    </header>
    <img src={AboutUsImage} alt="About Us" className="about-us-image" />
    <div className="about-us-content">
      <p>Welcome to our recipe website! We are passionate about cooking and sharing delicious recipes with you.</p>
      <p>Feel free to explore our collection of mouthwatering dishes from around the world.</p>
      <h2>Our Story</h2>
      <p>We're passionate about sharing recipes that inspire, just like Stella Clem's famous 5-ingredient chocolate cake that became a sensation in the 1950s. Our collection is curated to delight your taste buds and simplify your cooking journey.</p>
      <h2>Our Mission</h2>
      <p>We aim to inspire home cooks to try new recipes and cooking techniques, and to provide a platform for food enthusiasts to share their passion for cooking.</p>
      
    </div>
  </section>
);
};

export default About;