import React from 'react'

const Item = ({item}) => {
  return (
    <div>
        <h2>Ingredients</h2> 
          <img src={`https://spoonacular.com/cdn/ingredients_100×100/`+ item.image}></img> 
          <h3>{item.name}</h3>
           <h3>{item.amount} {item.unit}</h3>
    </div>
  )
}

export default Item