import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Login'
import Chat from './Chat'


class App extends Component {
  constructor(props){
    super()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
            <Route exact={true} path="/" component={Login} />
            <Route exact={true} path="/room" component={Chat} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App