import React, { Component } from 'react'
import { addUser } from './api/messaging'
import { connect } from 'react-redux'

const styles = {
    container: {
        backgroundColor: '#0A2342',
        height: '100vh',
        padding: '250px 0 0 0'
    },
    form: {
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        width: '40%',
        height: '30vh'
    },
    usernameContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        verticalAlign: 'middle',
        marginTop: '30px'
    },
    username: {
        fontSize: '17px',
        color: '#535353',
        margin: 0,
        padding: 0,
        lineHeight: '30px'
    },
    input: {
        border: 'none',
        outline: 'none',
        border: '1px solid #535353',
        background: 'none',
        fontSize: '25px',
        height: '30px',
        fontWeight: 'lighter',
        color: 'white',
        textTransform: 'lowercase',
        textAlign: 'center',
        width: '60%',
        marginLeft: '20px'
    },
    button: {
        width: '10vh',
        height: '25px',
        margin: 'auto',
        background: 'none',
        color: 'white',
        outline: 'none',
        border: '1px solid white',
        fontSize: '12px',
        textTransform: 'uppercase',
        cursor: 'pointer'
    },
    colorButton: {
        width: '50px',
        height: '25px',
        background: 'none',
        border: '1px solid white',
        color: 'white',

    },
    colorList: {
        listStyleType: 'none',
        padding: '0px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    colorChangeButton: {
        background: 'none',
        border: 'none',
        outline: 'none'
    }
}

class Login extends Component{
    constructor(props) {
        super()
        this.state = {
            username: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
         addUser(this.state.username)

         this.setState({
             username: ""
         })

         this.props.history.push('/room')
    }

    render() {
        return (
            <div style={styles.container}>
                <form style={styles.form} onSubmit={this.handleSubmit}>
                    <div style={styles.usernameContainer}>
                        <p style={styles.username}>Username</p>
                        <input style={styles.input} onChange={this.handleChange} type="text" id="loginName" name="username" value={this.state.username} placeholder="Username..." maxLength="15" autoComplete="off"/>
                    </div>
                    <button style={styles.button} type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login