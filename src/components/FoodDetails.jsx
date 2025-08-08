import React, { useEffect, useState } from 'react'
import styles from './foodDetails.module.css'
import ItemList from './ItemList'
const FoodDetails = ({foodID}) => {
  const [food,Setfood] = useState([])
  const [isLoading,setLoading] = useState(true)
  const URL = `${import.meta.env.VITE_BASE_URL}/${foodID}/information`;
const API_KEY1 = import.meta.env.VITE_API_KEY1;
const API_KEY = import.meta.env.VITE_API_KEY;

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
       
      <h2>Instructions :</h2> 
      <div className={styles.recipeInstructions}>
        <ol>
        {isLoading?<p>Loading ...</p>:food.analyzedInstructions[0].steps.map((step)=>{
          return<li key={step.number}>{step.step}</li>
        })}
        </ol>
      
      </div>
     
      </div>
      <h2>Ingredients</h2> 
      <ItemList food = {food} isLoading={isLoading}/>
    </>

  )
}

export default FoodDetails