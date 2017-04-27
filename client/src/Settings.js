import React, {Component} from 'react'
import ProfileColorOptions from './ProfileColorOptions'
import TextColorOptions from './TextColorOptions'
import FontOptions from './FontOptions'

const styles = {
    container: {
        width: '275px',
        height: '80.5vh',
        backgroundColor: 'white',
        color: '#353535',
        zIndex: '3',
        position: 'absolute',
        right: '0px',
        top: '11.82%',
        border: '1px solid rgba(125,125,125,0.2)',
        boxShadow: '-5px 0px 5px rgba(125,125,125,0.1)',
        overflowY: 'auto'
    },
    mainHeading: {
        padding: '0',
        margin: '15px 0',
        fontSize: '18px',
        textAlign: 'center'
    },
    mainList: {
        padding: 0,
        textAlign: 'center'
    },
    listItemHead: {
        textAlign: 'center',
        margin: 'auto',
        fontSize: '13px',
        color: '#353535',
        borderBottom: '1px solid #353535',
        display: 'inline-block',
        padding: '2px',
        marginBottom: '12px'
    }
}

class Settings extends Component {
    render() {
        return (
            <div style={styles.container}>
                <p style={styles.mainHeading}>Settings</p>
                <ul style={styles.mainList}>
                    <li>
                        <p style={styles.listItemHead}>Profile Color</p>
                        <ProfileColorOptions />
                    </li>
                    <li>
                        <p style={styles.listItemHead}>Text Color</p>
                        <TextColorOptions />
                    </li>
                    <li>
                        <p style={styles.listItemHead}>Font</p>
                        <FontOptions />
                    </li>
                </ul>
            </div>
        )
    }
}

export default Settings