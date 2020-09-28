import React from 'react'
import styles from './elements.module.css'

export default function fixedBar(props) {

    return (
        <div className={styles.FixedBar}>
            {props.line}
        </div>
    )
}
