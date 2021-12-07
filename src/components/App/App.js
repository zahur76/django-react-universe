import { React, useState, useEffect} from "react";
import './App.css';
import Header from '../Header/Header'
import Universe from '../Universe/Universe';

function App() {
  const[term, searchTerm]=useState(null);
  
  function onSubmit(term) {
    searchTerm(term)
  }
  return (
    <div className="App">
      <Header onSubmit={onSubmit}/>
      <Universe newTerm={term}/>
    </div>
  );
}

export default App;
