import React, { Component } from 'react'
import { addUser, login } from './api/messaging'
import styles from './Styles/LoginStyles.styles.js'

class Login extends Component{
    constructor(props) {
        super()
        this.state = {
            username: '',
            password: '',
            userColor: '#BBBBBF'
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
             username: '',
             password: ''
         })

         this.props.history.push('/room')
    }

    render() {
        return (
            <div style={styles.container}>
                
                <form style={styles.form} onSubmit={this.handleSubmit}>
                    <p style={{
                        fontSize: '50px',
                        margin: '15px 0 0 0',
                        padding: '0',
                        textAlign: 'center',
                        color: this.state.userColor,
                        fontWeight: '100',
                        fontStyle: 'italic'
                    }}>Chat</p>

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
                                <button type="button" onClick={this.handleColorSelect} name="BBBBBF" style={styles.colorDarkGrey}></button>
                            </li>
                        </ul>
                    </div>

                    <div style={styles.usernameContainer}>
                        <input style={styles.input} onChange={this.handleChange} type="text" id="loginName" name="username" value={this.state.username} placeholder="Username..." maxLength="15" autoComplete="off" />
                        <input style={styles.input} onChange={this.handleChange} type="text" id="userPass" name="password" value={this.state.password} placeholder="Password..." autoComplete="off" />
                    </div>

                    <button style={{
                        height: '25px',
                        margin: 'auto',
                        marginTop: '14px',
                        marginBottom: '14px',
                        background: 'none',
                        color: '#353535',
                        outline: 'none',
                        borderWidth: '0 0 2px 0',
                        borderStyle: 'solid',
                        borderColor: this.state.userColor,
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        padding:'1px 4px'
                    }} type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login