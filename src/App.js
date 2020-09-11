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

const charToAst = (line) => {
  const words = line.split(' ');
  var hiddenLine = '';

  words.map(word => {
    hiddenLine += Math.floor(Math.random() * 2) ? "*".repeat(word.length):word;
    if(!words.length - 1) {
      hiddenLine += " ";
    }
  });

  return hiddenLine;
}

const App = () => {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="navbar">
          <h1>COMPLETO</h1>
        </div>
        <div className="content">
          { test.split('\n').map((x) => 
            <FixedBar line={Math.floor(Math.random() * 2) ? charToAst(x):x} />
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
