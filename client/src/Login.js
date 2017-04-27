import React, { Component } from 'react'
import { addUser, login } from './api/messaging'
import styles from './Styles/LoginStyles.styles.js'

class Login extends Component{
    constructor(props) {
        super()
        this.state = {
            username: '',
            userColor: 'white'
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleColorSelect = (e) => {
        var color = '#' + [e.target.name]

        this.setState({
            userColor: color
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()
         addUser(this.state)
         login(this.state.username)
         this.setState({
             username: ''
         })

         this.props.history.push('/room')
    }

    render() {
        return (
            <div style={styles.container}>
                
                <form style={styles.form} onSubmit={this.handleSubmit}>
                    <p style={styles.title}>Login</p>

                    <div>
                        <ul style={styles.colorList}>
                            <li style={styles.listItem}>
                                <button type="button" onClick={this.handleColorSelect} name="14BDEB" style={styles.colorBlue}></button>
                            </li>
                            <li style={styles.listItem}>
                                <button type="button" onClick={this.handleColorSelect} name="81F7E5" style={styles.colorAqua}></button>
                            </li>
                            <li style={styles.listItem}>
                                <button type="button" onClick={this.handleColorSelect} name="436436" style={styles.colorForestGreen}></button>
                            </li>
                            <li style={styles.listItem}>
                                <button type="button" onClick={this.handleColorSelect} name="7FFD7F" style={styles.colorLime}></button>
                            </li>
                            <li style={styles.listItem}>
                                <button type="button" onClick={this.handleColorSelect} name="FFBE0B" style={styles.colorYellow}></button>
                            </li>
                            <li style={styles.listItem}>
                                <button type="button" onClick={this.handleColorSelect} name="F17300" style={styles.colorOrange}></button>
                            </li>
                            <li style={styles.listItem}>
                                <button type="button" onClick={this.handleColorSelect} name="EE4266" style={styles.colorRed}></button>
                            </li>
                            <li style={styles.listItem}>
                                <button type="button" onClick={this.handleColorSelect} name="A30015" style={styles.colorDarkRed}></button>
                            </li>
                            <li style={styles.listItem}>
                                <button type="button" onClick={this.handleColorSelect} name="FF63B1" style={styles.colorPink}></button>
                            </li>
                            <li style={styles.listItem}>
                                <button type="button" onClick={this.handleColorSelect} name="F2BEFC" style={styles.colorLavendar}></button>
                            </li>
                            <li style={styles.listItem}>
                                <button type="button" onClick={this.handleColorSelect} name="9381FF" style={styles.colorPurple}></button>
                            </li>
                            <li style={styles.listItem}>
                                <button type="button" onClick={this.handleColorSelect} name="12130F" style={styles.colorDarkGrey}></button>
                            </li>
                        </ul>
                    </div>

                    <div style={styles.usernameContainer}>
                        <input style={styles.input} onChange={this.handleChange} type="text" id="loginName" name="username" value={this.state.username} placeholder="Username..." maxLength="15" autoComplete="off"/>
                    </div>

                    <button style={styles.loginButton} type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login