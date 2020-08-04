import React, { useState, useEffect } from 'react';
import '././styles/App.css';

import { Navbar } from "./components/navbar"
import { Sidebar } from './components/sidebar';
import { Title } from './components/title';
import { Main } from './components/main';

function App() {

  const [data, setData] = useState()

  useEffect(() => {
    fetch(`https://onr-proj.herokuapp.com/gaugeData`)
      .then(res => res.json())
      .then(res => setData(res))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Sidebar />
      </header>
      <div className="body">
        <Navbar />
        <text style={{ marginLeft: "21vh", color: "#65696D", fontSize: "1.1em" }}>PERFORMANCE MANAGEMENT</text>
        <Title />
        <Main data={data}/>
      </div>
    </div>
  );
}

export default App;
