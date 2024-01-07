import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.svg';

const EffectTimer = () => {
 const [seconds, setSeconds] = useState(0);

 useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
 }, []);

 return (
    <div>
      <h1>Seconds Elapsed: {seconds}</h1>
    </div>
 );
};

function App() {
 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <EffectTimer />
    </div>
 );
}

export default App;
