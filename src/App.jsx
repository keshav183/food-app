import { useState } from 'react'

import './App.css'
import Search from './components/Search'
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import Container from './components/container.jsx';
import InnerContainer from './components/InnerContainer';
import FoodDetails from './components/FoodDetails.jsx';

function App() {
  const [foodData,SetfoodData] = useState([]);
  const [foodID,SetfoodID] = useState("715415");
  return (
    <>
      <Nav/>
      <Search foodData = {foodData} SetfoodData = {SetfoodData}/>
      <Container>
        <InnerContainer>
          <FoodList SetfoodID={SetfoodID} foodData = {foodData}/>
        </InnerContainer>
        <InnerContainer>
          < FoodDetails foodID={foodID}/>
        </InnerContainer>
      </Container>
    </>
  )
}

export default App
