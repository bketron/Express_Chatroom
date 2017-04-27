import React, { Component } from 'react'
import styles from './Styles/FontOptions.styles.js'

class FontOptions extends Component {
    render() {
        return (
            <div>
                <ul style={styles.list}>
                    <li style={styles.listItem}>
                        <p style={styles.sans1}>Text</p>
                    </li>
                    <li style={styles.listItem}>
                        <p style={styles.sans2}>Text</p>
                    </li>
                    <li style={styles.listItem}>
                        <p style={styles.sans3}>Text</p>
                    </li>
                    <li style={styles.listItem}>
                        <p style={styles.serif1}>Text</p>
                    </li>
                    <li style={styles.listItem}>
                        <p style={styles.serif2}>Text</p>
                        </li>
                    <li style={styles.listItem}>
                        <p style={styles.serif3}>Text</p>
                    </li>
                    <li style={styles.listItem}>
                        <p style={styles.cursive1}>Text</p>
                    </li>
                    <li style={styles.listItem}>
                        <p style={styles.cursive2}>Text</p>
                    </li>
                    <li style={styles.listItem}>
                        <p style={styles.cursive3}>Text</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default FontOptions