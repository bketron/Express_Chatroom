import React, {Component} from 'react'
import styles from './Styles/NavBar.styles.js'

class NavBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            color: ''
        }
    }

    componentWillMount() {
        this.setState({
            color: this.props.user.userColor
        })
    }

    render() {
        return (
            <div style={styles.container}>
                    <p style={styles.username}><i style={{
                        color: this.props.user.color,
                        fontSize: '12px',
                        lineHeight: '20px',
                        marginRight: '5px',
                        position: 'relative',
                        top: '-3px'
                        }}className="fa fa-circle" aria-hidden="true"></i>{this.props.user.username}</p>

                <p style={styles.channelsHeader}>Available Channels</p>
                <div style={styles.divLine}></div>
            </div>
        )
    }
}

export default NavBar