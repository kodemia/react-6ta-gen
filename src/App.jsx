import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar'
import ValidateSession from './components/ValidateSession'

import Home from './views/Home'
import Post from './views/Post'
import Login from './views/Login'
import Logout from './views/Logout'

import api from './lib/api'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      authorization: ''
    }
  }

  async componentDidMount () {
    const token = window.sessionStorage.getItem('authorization')

    const payload = await api.validateSession(token)

    this.setState({ authorization: payload.data.token })
  }

  componentDidUpdate () {
    const token = window.sessionStorage.getItem('authorization')

    if (token && !this.state.authorization) {
      this.setState({ authorization: token })
    }
  }

  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          {this.state.authorization && <Navbar />}
          <ValidateSession />
          <Switch>
            <Route
              path='/'
              component={Home}
              exact
            />
            <Route
              path='/post'
              component={Post}
              exact
            />
            <Route
              path='/login'
              component={Login}
              exact
            />
            <Route
              path='/logout'
              component={Logout}
              exact
            />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
