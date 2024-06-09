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

<<<<<<< HEAD
  export default Recipe
=======

function Recipe(prop) {
    return(
        <div className="recipe-container">
            <div className="recipe-card">
            <img src={Pasta} alt="demo" className='recipe-image' /> 
            <h2>Pasta alla Sorrentina</h2>
            <p className='description'>A classic Italian dish featuring rigatoni, smoked
                 Scamorza, fresh tomatoes, garlic, and basil in a 
                 simple yet flavorful sauce</p>

                <span>Cooking Time: 1 Hour 15 munitess</span>
        </div>
        </div>
        
    )

    
}

export default Recipe;
>>>>>>> 7084ec5de451f56cdd5a637b0d3c92ca88d39f90
