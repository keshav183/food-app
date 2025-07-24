import React from 'react'
import styles from './Item.module.css'
const Item = ({item}) => {
  return (
    <div className={styles.itemContainer}>
        
          <div className={styles.ItemImage}><img className={styles.Image
          } src={`https://spoonacular.com/cdn/ingredients_100×100/`+ item.image}></img></div> 
          <div className={styles.itemInfo}>
          <div className={styles.itemName}>{item.name}</div>
           <div className={styles.itemAmount}>{item.amount} {item.unit}</div>
            </div>
    </div>
  )
}

export default Item