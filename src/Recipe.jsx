import Pasta from './Assets/pasta.jpeg'


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