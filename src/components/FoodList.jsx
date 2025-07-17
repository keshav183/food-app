import FoodItem from "./FoodItem"

export default function FoodList({foodData , SetfoodID}) {
    return (
        <>
         {foodData.map((food)=>{
            return <FoodItem key={food.id} SetfoodID={SetfoodID} food={food}/>
        })}
        </>
    )
}