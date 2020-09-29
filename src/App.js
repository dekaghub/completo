import React from 'react';
import EntryBar from './components/entrybar.jsx';
import Lines from './components/lines'
import './App.css';
import styles from './components/elements.module.css'

const App = () => {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="App">
      <div className="grid-container">
        <div className="navbar">
          <h1>COMPLETO</h1>
        </div>
        <div className="content">
          <Lines />
          {/* { console.log(Math.floor(Math.random() * (5 - 2) + 2))} */}
          <EntryBar />                   
          <EntryBar />                   
        </div>
        <div className="bottom">
          <button 
              className={styles.ShuffleButton}
              onClick={refreshPage}
          >
              Randomize
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
