import './App.css';
// import axios from "axios";
// import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ListBeers from './pages/ListBeers';
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import SingleBeer from "./pages/SingleBeer";
// const apiURL = "https://ih-beers-api2.herokuapp.com/beers";


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/beers" element={<ListBeers />} />
          <Route path="/random-beer" element={<RandomBeer />}></Route>
          <Route path="/new-beer" element={<NewBeer />}></Route>
          <Route path="/beers/:id" element={<SingleBeer />}></Route>
          <Route path='/random-beer' element={<RandomBeer />}></Route>
      </Routes>
     </header>
    </div>
  );
}

export default App;
