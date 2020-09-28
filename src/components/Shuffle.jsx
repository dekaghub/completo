import React, { Component } from 'react'
import styles from './elements.module.css'

export class Shuffle extends Component {
    render() {
        return (
            <button 
                className={styles.ShuffleButton}
            >
                Randomize
            </button>
        )
    }
}

export default Shuffle;
