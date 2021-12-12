import { React, useState, useEffect} from "react";
import './App.css';
import Header from '../Header/Header'
import Universe from '../Universe/Universe';
import Admin from '../Admin/Admin'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[search, searchStatus]=useState(null);

  function onSearch(search) {
    searchStatus(search)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes className="App">
            <Route path="/" element={<div><Header onSearch={onSearch}/> <Universe searchStatus={search}/></div>} />
            <Route path="/adminuser" element={<Admin />} />                            
        </Routes> 
      </BrowserRouter>
    </div>
    
  );
}

export default App;
