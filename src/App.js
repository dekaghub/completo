import React from 'react';
import FixedBar from './components/FixedBar.jsx';
import Shuffle from './components/Shuffle';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="navbar">
          <h1>COMPLETO</h1>
        </div>
        <div className="content">
          <FixedBar className="fixed-bar" />          
          <FixedBar className="fixed-bar" />          
          <FixedBar className="fixed-bar" />          
          <FixedBar className="fixed-bar" />          
          <FixedBar className="fixed-bar" />          
        </div>
        <div className="bottom">
          <Shuffle />
        </div>
      </div>
    </div>
  );
}

export default App;
