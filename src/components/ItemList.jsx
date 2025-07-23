import Item from "./item";

export default function ItemList({food, isLoading}) {
    return <div>
       {
        isLoading?<>loading</>:(
        food.extendedIngredients.map((item)=>(<div>
          <Item item = {item}/>
          </div>)))
       }
         
      
    </div>
   
}