import React from 'react';
// import useKeyListener from '@jrh/npm-talk-standard-version/lib/useKeyListener';
import { useKeyListener } from '@jrh/npm-talk-standard-version';
import logo from './logo.svg';
import './App.css';

const App = () => {
  useKeyListener(['a'], () => {
    console.log('user pressed "a"');
  });
  
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
    </div>
  );
}

export default App;
