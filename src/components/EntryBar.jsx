import React, { Component, useState } from 'react'
import styles from './elements.module.css'

export class EntryBar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             line: ''
        }
    };
    
    
    render() {
        return (
                <input
                    className={styles.EntryBar}
                    placeholder="Type to complete..."
                    value={this.line}
                    onChange={ (e) => this.setState({line: e.target.value}) }
                />
        )
    }
}

export default EntryBar
