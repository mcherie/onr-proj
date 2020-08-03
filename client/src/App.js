import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Navbar } from "./components/navbar"
import { Sidebar } from './components/sidebar';
import { Title } from './components/title';
import { Main } from './components/main';

function App() {

  const [data, setData] = useState()

  useEffect(() => {
    fetch("http://localhost:5000/gaugeData")
      .then(res => res.json())
      .then(res => setData(res))
  }, [])

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
        <Sidebar />
      </header>
      <div className="body">
        <Navbar />
        <text style={{ marginLeft: "21vh", color: "#65696D" }}>PERFORMANCE MANAGEMENT</text>
        <Title />
        <Main data={data}/>
      </div>
    </div>
  );
}

export default App;
