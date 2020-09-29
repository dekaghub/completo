import React from 'react'
import styles from './elements.module.css'


function FixedBars(props) {

    return (
        <div className={styles.FixedBar}>
            {props.line}
        </div>
    )
}

export default FixedBars;