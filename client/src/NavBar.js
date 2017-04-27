import React, {Component} from 'react'
import styles from './Styles/NavBar.styles.js'

class NavBar extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div style={styles.container}>
                <p style={styles.channelsHeader}>Available Channels</p>
                <div style={styles.divLine}></div>
            </div>
        )
    }
}

export default NavBar