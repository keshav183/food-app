import { useState } from 'react'

import './App.css'
import Search from './components/search'
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import Container from './components/container.jsx';
import InnerContainer from './components/InnerContainer';

function App() {
  const [foodData,SetfoodData] = useState([]);
  return (
    <>
      <Nav/>
      <Search foodData = {foodData} SetfoodData = {SetfoodData}/>
      <Container>
        <InnerContainer>
          <FoodList foodData = {foodData}/>
        </InnerContainer>
      </Container>
    </>
  )
}

export default App
