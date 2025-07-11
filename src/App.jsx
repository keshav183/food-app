import { useState } from 'react'

import './App.css'
import Search from './components/search'

function App() {
  const [foodData,SetfoodData] = useState([]);
  return (
    <>
      <Search foodData = {foodData} SetfoodData = {SetfoodData}/>
      {foodData.map((food)=>{
        return <h1>{food.title}</h1>
  })}
    </>
  )
}

export default App
