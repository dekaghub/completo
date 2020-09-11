import React from 'react';
import FixedBar from './components/FixedBar.jsx';
import EntryBar from './components/EntryBar'
import Shuffle from './components/Shuffle';
import './App.css';

const test = 'This is a test message';

const App = () => {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="navbar">
          <h1>COMPLETO</h1>
        </div>
        <div className="content">
          <FixedBar line={test}/>                    
          <FixedBar line={test}/>                    
          <FixedBar line={test}/> 
          <EntryBar />                   
          <EntryBar />                   
        </div>
        <div className="bottom">
          <Shuffle />
        </div>
      </div>
    </div>
  );
}

export default App;
