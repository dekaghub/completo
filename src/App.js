import React from 'react';
import axios from 'axios';
import FixedBar from './components/FixedBar.jsx';
import EntryBar from './components/EntryBar'
import Shuffle from './components/Shuffle';
import './App.css';
import styles from './components/elements.module.css'

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

  getLyrics = (word) => {
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q=${word}&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
              .then(res => {
                  console.log(res);
              })
              .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <div className="grid-container">
        <div className="navbar">
          <h1>COMPLETO</h1>
        </div>
        <div className="content">
          { test.split('\n').map((x) => <FixedBar line={x} /> )}
          <EntryBar />                   
          <EntryBar />                   
        </div>
        <div className="bottom">
        <button 
                className={styles.ShuffleButton}
                onClick={getLyrics('Drive')}
            >
                Randomize
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;
