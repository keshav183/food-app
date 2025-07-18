import React, { useEffect, useState } from 'react'

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
    console.log(data);}
    setLoading(false)
    fetchFood();
  },[foodID])
  return ( 
    <>
    <div>Food Details {foodID}</div>
    <div>
      <h1>{food.title}</h1>
      <img src={food.image} alt="" />
    </div>

    <span>
      <strong>{food.readyInMinutes} Minutes </strong>
    </span>
    <span>
      <strong>Serve : {food.servings}</strong>
      </span>
    <span>{food.vegetarian? " vegetarian":" non-veg"}</span>
    <span>{food.vegan?" vegan": ""}</span>
    <div>
      Rupees: <span>{food.pricePerServing}</span>
    </div>
    <div>
      <h2>Instructions :</h2> 
      {isLoading?<p>Loading ...</p>:food.analyzedInstructions[0].steps.map((step)=>{
        return<li>{step.step}</li>
      })}
      
    </div>
    </>
    
    
  )
}

export default FoodDetails