import React, { Component } from 'react'
import styles from './Styles/ProfileColorOptions.styles.js'

class ProfileColorOptions extends Component {
    render() {
        return (
            <div style={styles.profileColorOptions}>
                <ul style={styles.colorList}>
                    <li style={styles.listItem}>
                        <button onClick={this.handleProfileColorChange} type="button" style={styles.blue}></button>
                        {/*<p style={styles.colorName}>Blue</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <button onClick={this.handleProfileColorChange} type="button" style={styles.aqua}></button>
                        {/*<p style={styles.colorName}>Aqua</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <button onClick={this.handleProfileColorChange} type="button" style={styles.forestGreen}></button>
                        {/*<p style={styles.colorName}>Forest Green</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <button onClick={this.handleProfileColorChange} type="button" style={styles.lime}></button>
                        {/*<p style={styles.colorName}>Lime Green</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <button onClick={this.handleProfileColorChange} type="button" style={styles.yellow}></button>
                        {/*<p style={styles.colorName}>Yellow</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <button onClick={this.handleProfileColorChange} type="button" style={styles.orange}></button>
                        {/*<p style={styles.colorName}>Orange</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <button onClick={this.handleProfileColorChange} type="button" style={styles.lightRed}></button>
                        {/*<p style={styles.colorName}>Light Red</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <button onClick={this.handleProfileColorChange} type="button" style={styles.red}></button>
                        {/*<p style={styles.colorName}>Red</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <button onClick={this.handleProfileColorChange} type="button" style={styles.pink}></button>
                        {/*<p style={styles.colorName}>Pink</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <button onClick={this.handleProfileColorChange} type="button" style={styles.lavendar}></button>
                        {/*<p style={styles.colorName}>Lavendar</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <button onClick={this.handleProfileColorChange} type="button" style={styles.purple}></button>
                        {/*<p style={styles.colorName}>Purple</p>*/}
                    </li>
                    <li style={styles.listItem}>
                        <button onClick={this.handleProfileColorChange} type="button" style={styles.darkGrey}></button>
                        {/*<p style={styles.colorName}>Dark Grey</p>*/}
                    </li>
                </ul>
            </div>
        )
    }
}

export default ProfileColorOptions