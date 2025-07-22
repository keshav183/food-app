import React, { useEffect, useState } from 'react'
import styles from './foodDetails.module.css'
const FoodDetails = ({foodID}) => {
  const [food,Setfood] = useState([])
  const [isLoading,setLoading] = useState(true)
  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY1 = "08478c0a38ff4d969027043fef4e8775"
  const API_KEY = "192950549db54245abaae5c92a6d39fd"
  useEffect(()=>{
   async function fetchFood() { 
    const res = await fetch(URL+"?apiKey="+API_KEY)
    const data = await res.json();
    Setfood(data);
    console.log(data)
    setLoading(false)
  }
    
    fetchFood();
  },[foodID])
  return ( 
    <>
    
    <div className={styles.recipeCard}>
     
      <h1 className={styles.recipeName}>{food.title}</h1>
      <img className={styles.recipeImg} src={food.image} alt="" />
    </div>
    <div className={styles.recipeDetails}>
        <span>
          <strong>{food.readyInMinutes} Minutes </strong>
        </span>
        <span>
          <strong>Serve : {food.servings}</strong>
          </span>
        <span>{food.vegetarian? " vegetarian":" non-veg"}</span>
        <span>{food.vegan?" vegan": ""}</span>
    </div>
   
    <div>
      <strong>Cost: <span>₹{food.pricePerServing}</span></strong>
    </div>
    <div>
       <h2>Ingredients</h2> 
       {food.extendedIngredients.map((item)=>{return <div> <img src={`https://spoonacular.com/cdn/ingredients_100×100/`+ item.image}></img> <h3>{item.name}</h3> <h3>{item.amount} {item.unit}</h3></div>})}
      <h2>Instructions :</h2> 
      <div className={styles.recipeInstructions}>
        <ol>
        {isLoading?<p>Loading ...</p>:food.analyzedInstructions[0].steps.map((step)=>{
          return<li key={step.number}>{step.step}</li>
        })}
        </ol>
      
      </div>
      
      
    </div>
   
    </>
    
    
  )
}

export default FoodDetails