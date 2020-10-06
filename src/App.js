import React from "react";
import EntryBar from "./components/EntryBar.jsx";
import Lines from "./components/Lines";
import "./App.css";
import styles from "./components/elements.module.css";

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
          <EntryBar />
          <EntryBar />
        </div>
        <div className="bottom">
          <button className={styles.ShuffleButton} onClick={refreshPage}>
            Randomize
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
