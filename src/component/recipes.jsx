import { render } from '@testing-library/react'
import React, { Component } from 'react'

class Recipes extends Component {
  
  render() {
    return ( 
      <div className='container'>

       <h1> StellaClem Recipes</h1>
        <h2>Pasta</h2>
        <img src="" alt="pasta" className="food-image" />
        <p>Preperation Time: <span>30 minutes</span></p>
        <p>cooking Time: <span>45 minutes</span></p>
        <p>Total Time: <span>1 hour 15 minutes</span></p>
      </div>
    )
  }
}

export default Recipes;
