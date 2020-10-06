import React, { useState } from 'react';
import styles from './elements.module.css';

function EntryBar() {

    const [line, setLine] = useState('');

    function handleLine(e) {
        setLine(e.target.value);
    };

    return (
            <input
                className={styles.EntryBar}
                placeholder="Type to complete..."
                value={line}
                onChange={handleLine}
            />
    )
}

export default EntryBar;
