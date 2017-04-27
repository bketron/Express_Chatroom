import React, { Component } from 'react'
import { addMessage } from './api/messaging'
import { connect } from 'react-redux'
import HeadBar from './HeadBar'
import NavBar from './NavBar'
import Settings from './Settings'

const styles = {
    container: {
        height: '100vh',
        backgroundColor: '#ECEFF1',
        display: 'flex',
        flexDirection:'row',
        flexWrap: 'nowrap',
        overflow: 'hidden'
    },
    contentArea: {
        width: '100%',
        
    },
    chatAndUsers: {
        display: 'flex',

    },
    chatArea: {
        height: '88vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column-reverse',
        backgroundColor: '#F2F2F2'
    },
    messageArea: {
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'flex-start',
        textAlign: 'left'
    },
    messageList: {
        float: 'right',
        margin: '15px 20px'
    },
    messageContents: {
        display: 'flex',
        flexDirection: 'column'
    },
    messageTimeStamp: {
        display: 'block',
        fontSize: '9px',
        margin: '4px 6px',
        position: 'relative',
        top: '3px',
        color: 'rgba(53,53,53,0.4)'
    },
    username: {
        margin: '0',
        fontSize: '14px',
        fontWeight: 'bold',
        marginRight: '2px',
        marginBottom: '2px',
        color: 'rgba(53,53,53,0.8)'
    },
    userPanel: {
        display:'block',
        height: '80vh',
        width: '20%',
        backgroundColor: '#d8dbe2',
        float: 'right'
    },
    form: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#ffffff',
    },
    input: {
        width: '99.9%',
        height: '35px',
        outline: 'none',
        padding: '0 10px',
        margin: '0 5px 0 0',
        borderRadius: '4px',
        background: 'none',
        border: '1px solid rgba(53,53,53,0.5',
        color: 'rgba(50,50,50,0.8)',
        fontSize: '15px'
    },
    messageData: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        maxWidth: '85vh',
        flexWrap: 'wrap'
    }
}

class Chat extends Component {
  constructor() {
    super()
    this.state = {
      message: '',
      messageColor: 'black',
      messageFont: 'sans-serif'
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    addMessage(this.state.message)
    this.setState({
      message:''
    })
  }
  
    componentWillMount() {
        if (!this.props.username) {
            this.props.history.push('/')
        }
    }

    componentWillUpdate() {
        var node = this.refs.messages
        this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight
    }

    componentDidUpdate() {
        if (this.shouldScrollBottom) {
            var node = this.refs.messages
            node.scrollTop = node.scrollHeight
        }
    }

  render() {
    return (
        <div style={styles.container}>
            {console.log(this.props.user)}
                <NavBar user={this.props.user}/>
            <div style={styles.contentArea}>
                <HeadBar />

                <div style={styles.chatAndUsers}>
                    <section style={styles.chatArea}>

                        <form style={styles.form} onSubmit={this.handleSubmit} autoComplete="off">
                            <input style={styles.input} onChange={this.handleChange} name="message" placeholder="Send a message..." value={this.state.message} />
                            
                        </form>

                        <div style={styles.messageArea} id="messages" ref="messages">
                            <ul style={styles.messageList}>
                                {this.props.messages.map((message, i)=> (
                                    <li key={'message' + i}>
                                        <div style={styles.messageContents}>
                                            <p style={{
                                                color: message.userColor,
                                                margin: '0',
                                                fontSize: '15px',
                                                fontWeight: 'bold',
                                                marginRight: '2px',
                                                marginBottom: '2px'
                                            }}>{message.username}</p>

                                            <div style={styles.messageData}>                             
                                                <div style={{
                                                    color: this.state.messageColor,
                                                    fontSize: '12px',
                                                    textAlign: 'left',
                                                    marginTop: '4px',
                                                    fontFamily: this.state.messageFont,
                                                    wordWrap: 'break-word',
                                                    wordBreak: 'break-all'
                                                }}>{message.message}</div>   
                                                <div style={styles.messageTimeStamp}>{message.time}</div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                    
                </div>
            </div>

            <Settings />
        </div>
    )
  }
}

const mapStateToProps = function(appState) {
  return {
    messages: appState.messages,
    user: appState.user,
    username: appState.username
  }
}

export default connect(mapStateToProps)(Chat)