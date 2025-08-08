import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Search from './components/Search';
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import Container from './components/container.jsx';
import InnerContainer from './components/InnerContainer';
import FoodDetails from './components/FoodDetails.jsx';
import About from './components/About'; 


function App() {
  const [foodData, SetfoodData] = useState([]);
  const [foodID, SetfoodID] = useState("715415");

  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Search foodData={foodData} SetfoodData={SetfoodData} />
              <Container>
                <InnerContainer>
                  <FoodList SetfoodID={SetfoodID} foodData={foodData} />
                </InnerContainer>
                <InnerContainer>
                  <FoodDetails foodID={foodID} />
                </InnerContainer>
              </Container>
            </>
          }
        />
        <Route path="/about" element={<About />} />
       
      </Routes>
    </Router>
  );
}

export default App;
