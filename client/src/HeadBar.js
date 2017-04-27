import React, {Component} from 'react'

const styles = {
    main: {
        height: '12vh',
        backgroundColor: 'white',
        borderBottom: '1px solid rgba(53,53,53,0.3)',
        display: 'flex'
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: '0 35px',
        justifyContent: 'space-between'
    },
    mainInfo: {
        position: 'relative',
        top: '-5px'
    },
    functions: {

    },
    roomName: {
        margin: 0,
        fontSize: '27px',
        fontWeight: 'bold',
        fontFamily: 'Yantramanav, sans-serif'
    },
    roomInfo: {
        display: 'flex',

    },
    members: {
        margin: 0,
        fontSize: '12px',
        lineHeight: '15px'
    },
    memberIcon: {
        color: '#353535',
        fontSize: '10px',
        marginRight: '5px',
        lineHeight: '15px',
        position: 'relative',
        top: '-1px'
    },
    divLine: {
        borderLeft: '1px solid grey',
        height: '15px',
        margin: '0 10px'
    },
    description: {
        margin: 0,
        fontSize: '12px',
        lineHeight: '15px'
    },
    buttons: {
        display: 'flex'
    },
    timeStamp: {
        margin: 0,
        fontSize: '12px',
        lineHeight: '15px'
    },
    timeStampIcon: {
        color: '#353535',
        fontSize: '17px',
        marginRight: '15px',
        lineHeight: '15px',
        position: 'relative',
        top: '-1px',
        cursor: 'pointer'
    },
    signout: {
        margin: 0,
        fontSize: '12px',
        lineHeight: '15px',
        background: 'none',
        border: 'none',
        outline: 'none'
    },
    signoutIcon: {
        color: '#353535',
        fontSize: '19px',
        marginRight: '15px',
        lineHeight: '15px',
        position: 'relative',
        top: '-1px',
        cursor: 'pointer'
    },
    settings: {
        margin: 0,
        fontSize: '12px',
        lineHeight: '15px'
    },
    settingsIcon: {
        color: 'rgba(53,53,53,0.9)',
        fontSize: '19px',
        marginRight: '15px',
        lineHeight: '15px',
        position: 'relative',
        top: '-1px',
        cursor: 'pointer'
    }
}

class HeadBar extends Component {

    handleSignOut(){
        this.props.history.push('/')
    }

    render() {
        return (
            <div style={styles.main}>
                <div style={styles.container}>
                    <section style={styles.mainInfo}>
                    <p style={styles.roomName}>room_name</p>

                    <div style={styles.roomInfo}>
                        <p style={styles.members}><i style={styles.memberIcon} className="fa fa-user-o" aria-hidden="true"></i>Members</p>

                        <div style={styles.divLine}></div>

                        <p style={styles.description}>Room description goes here...</p>
                    </div>
                    </section>

                    <section style={styles.functions}>
                        <div style={styles.buttons}>
                            <p style={styles.timeStamp}><i style={styles.timeStampIcon} className="fa fa-bars" aria-hidden="true"></i></p>
                            <p style={styles.settings}><i style={styles.settingsIcon} className="fa fa-cog" aria-hidden="true"></i></p>
                            <a href="/" style={styles.signout}><i style={styles.signoutIcon} className="fa fa-sign-out" aria-hidden="true"></i></a>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default HeadBar