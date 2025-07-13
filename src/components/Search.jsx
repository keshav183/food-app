import { useEffect, useState } from "react"
import styles from './search.module.css'
const URL = "https://api.spoonacular.com/recipes/complexSearch?";
const API_KEY = "192950549db54245abaae5c92a6d39fd"
const API_KEY1 = "08478c0a38ff4d969027043fef4e8775"
export default function Search({foodData,SetfoodData}) {
    const [query,Setquery] = useState("pizza")
    useEffect(()=>{
       async function fetchFood() {
           const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY1}`)
           const data = await res.json()
           SetfoodData(data.results);
        } 
            fetchFood()
    },[query])
    return (
        <div className= {styles.searchContainer}>
            <input
            className={styles.input}
             type="text" 
            value = {query} 
            placeholder="type food here"
            onChange={(e)=>{Setquery(e.target.value)}}
            ></input>
        </div>
    )
}