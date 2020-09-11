import React from 'react';
import FixedBar from './components/FixedBar.jsx';
import EntryBar from './components/EntryBar'
import Shuffle from './components/Shuffle';
import './App.css';

const test = `
Last day of the rest of my life
I wish I would've known
'Cause I would've kissed my mama goodbye
I didn't tell her that I loved her and how much I care
`;

const App = () => {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="navbar">
          <h1>COMPLETO</h1>
        </div>
        <div className="content">
          { test.split('\n').map((x) => 
            <FixedBar line={x} />
          )}
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
