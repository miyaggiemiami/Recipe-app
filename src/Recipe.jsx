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

  export default Recipe