import { useEffect, useState } from "react"
const URL = "https://api.spoonacular.com/recipes/complexSearch?";
const API_KEY = "192950549db54245abaae5c92a6d39fd"
export default function Search({foodData,SetfoodData}) {
    const [query,Setquery] = useState("pizza")
    useEffect(()=>{
       async function fetchFood() {
           const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
           const data = await res.json()
           SetfoodData(data.results);
        } 
            fetchFood()
    },[query])
    return (
        <>
            <input
             type="text" 
            value = {query} 
            placeholder="type food here"
            onChange={(e)=>{Setquery(e.target.value)}}
            ></input>
        </>
    )
}