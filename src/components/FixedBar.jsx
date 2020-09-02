import React, { Component } from 'react'
import styles from './elements.module.css'


export class FixedBar extends Component {
    render() {
        return (
            <div className={styles.FixedBar}>
                This is a test bar. Testing the length and width now.
            </div>
        )
    }
}

export default FixedBar;
