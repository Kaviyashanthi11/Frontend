import React from 'react';
import './App.css';
import logo from '../src/logo.svg'; // Import the logo image

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Display the logo */}
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React</h1>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;