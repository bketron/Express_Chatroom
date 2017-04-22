import React, {Component} from 'react'

const styles = {
    container: {
        height: '100vh',
        width: '300px',
        float: 'left',
        clear: 'right',
        backgroundColor: 'rgb(12, 44, 84)',
        padding: '10px 25px'
    },
    username: {
        margin: 0,
        padding: 0,
        fontSize: '20px',
        fontFamily: 'Yantramanav, sans-serif',
        color: 'white',
        lineHeight: '30px',
        textAlign: 'center',
        marginRight: '15px'
    },
    mainUserIcon: {
        margin: '0 5px 0 0',
        padding: 0,
        fontSize: '11px',
        color: 'pink',
        lineHeight: '30px',
        position: 'relative',
        top: '-2px'
    },
    channelsHeader: {
        fontSize: '14px',
        color: 'white',
        fontWeight: 'bold',
        marginTop: '50px',
        textAlign: 'center'
    },
    divLine: {
        width: '100%',
        borderBottom: '1px solid white',
    }
}

class NavBar extends Component {
    render() {
        return (
            <div style={styles.container}>
                <p style={styles.username}><i style={styles.mainUserIcon} className="fa fa-circle" aria-hidden="true"></i>Username</p>

                <p style={styles.channelsHeader}>Available Channels</p>
                <div style={styles.divLine}></div>
            </div>
        )
    }
}

export default NavBar