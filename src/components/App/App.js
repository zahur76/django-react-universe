import { React, useState, useEffect} from "react";
import './App.css';
import Header from '../Header/Header'
import Universe from '../Universe/Universe';

function App() {
  const[search, searchStatus]=useState(null);

  function onSearch(search) {
    searchStatus(search)
  }

  return (
    <div className="App">
      <Header onSearch={onSearch}/>
      <Universe searchStatus={search}/>
    </div>
  );
}

export default App;
