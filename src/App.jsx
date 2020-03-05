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

  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Navbar />
          <ValidateSession />
          <div className='container'>
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
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
