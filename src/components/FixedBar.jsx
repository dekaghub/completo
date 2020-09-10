import React, { Component } from 'react'
import styles from './elements.module.css'


export class FixedBar extends Component {
    render() {
        return (
            <div className={styles.FixedBar}>
                {this.props.line}
            </div>
        )
    }
}

export default FixedBar;
