import React from 'react'
import styles from './foodItem.module.css'
const  FoodItem  = ({food , SetfoodID}) => {
  return (
    <div className={styles.itemContainer}>
        <img className={styles.image} src={food.image} alt=""></img>
        <div className={styles.itemContext}><p className={styles.itemContextText} >{food.title}</p></div>
        
        <div className={styles.buttonContainer}><button onClick={()=>{
         console.log(food.id)
          SetfoodID(food.id)
        }} className={styles.recButton}>view recipe</button></div>
    </div>
  )
}

export default FoodItem