import React, { Component } from 'react'
import styles from './Styles/TextColorOptions.styles.js'

class TextColorOptions extends Component {
    render() {
        return (
            <div style={styles.profileColorOptions}>
                <ul style={styles.colorList}>
                    <li style={styles.listItem}>
                        <div style={styles.blue}></div>
                        {/*<p style={styles.colorName}>Blue</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <div style={styles.aqua}></div>
                        {/*<p style={styles.colorName}>Aqua</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <div style={styles.forestGreen}></div>
                        {/*<p style={styles.colorName}>Forest Green</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <div style={styles.lime}></div>
                        {/*<p style={styles.colorName}>Lime Green</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <div style={styles.yellow}></div>
                        {/*<p style={styles.colorName}>Yellow</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <div style={styles.orange}></div>
                        {/*<p style={styles.colorName}>Orange</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <div style={styles.lightRed}></div>
                        {/*<p style={styles.colorName}>Light Red</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <div style={styles.red}></div>
                        {/*<p style={styles.colorName}>Red</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <div style={styles.pink}></div>
                        {/*<p style={styles.colorName}>Pink</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <div style={styles.lavendar}></div>
                        {/*<p style={styles.colorName}>Lavendar</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <div style={styles.purple}></div>
                        {/*<p style={styles.colorName}>Purple</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <div style={styles.darkGrey}></div>
                        {/*<p style={styles.colorName}>Dark Grey</p>*/}
                    </li>
                </ul>
            </div>
        )
    }
}

export default TextColorOptions