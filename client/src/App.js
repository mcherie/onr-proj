import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';

import { Navbar } from "./components/navbar"

function App() {

  const [data, setData] = useState()

  useEffect(()=> {
    fetch("http://localhost:5000/test")
    .then(res => res.text())
    .then(res => setData(res))
  },[])

  console.log("data is", data)
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {data}

        </a> */}
        <Navbar />
      </header>
    </div>
  );
}

export default App;
