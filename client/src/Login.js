import React, { Component } from 'react'
import { addUser } from './api/messaging'
import { connect } from 'react-redux'

const styles = {
    container: {
        backgroundColor: '#222',
        height: '100vh',
        padding: '250px 0 0 0'
    },
    form: {
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        margin: 'auto',
        width: '35%',
        border: 'none',
        outline: 'none',
        borderBottom: '2px solid white',
        background: 'none',
        fontSize: '25px',
        fontWeight: 'lighter',
        color: 'white',
        textTransform: 'lowercase',
        marginBottom: '15px',
        textAlign: 'center'
    },
    button: {
        width: '5%',
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
                    <input style={styles.input} onChange={this.handleChange} type="text" id="loginName" name="username" value={this.state.username} placeholder="Username..." maxLength="15" autoComplete="off"/>
                    <button style={styles.button} type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login