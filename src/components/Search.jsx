import { useEffect, useState } from "react"
import styles from './search.module.css'
const URL = import.meta.env.VITE_API_URL;

const API_KEY = import.meta.env.VITE_API_KEY;
const API_KEY1 = import.meta.env.VITE_API_KEY1;

export default function Search({foodData,SetfoodData}) {
    const [query,Setquery] = useState("pasta")
    useEffect(()=>{
       async function fetchFood() {
           const res = await fetch(`${URL}query=${query}&apiKey=${API_KEY}`)
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