import React from 'react';
import logo from './logo.svg';
import {ReactComponent as background} from './blue-background.svg'
import './App.css';

function App() {
  return (
    <div className="Nav">
      <nav>
        <a href="#top">Home</a>
        <a href="#top">Schedule</a>
        <a href="#top">Contact</a>
        <a href="#top">About</a>
      </nav>
      
      <div className="Background">
        <background />
      </div>
    </div>
  );
}

export default App;
