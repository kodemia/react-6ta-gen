import React, { Component } from 'react'

import Navbar from './components/Navbar'

import Home from './views/Home'
import Post from './views/Post'

import LoginForm from './components/LoginForm'

import api from './lib/api'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      authorization: ''
    }
  }

  async onLogin (auth) {
    const payload = await api.login(auth.email, auth.password)

    this.setState({ authorization: payload.data.token })
  }

  async componentDidMount () {
    const token = window.sessionStorage.getItem('authorization')

    const payload = await api.validateSession(token)

    this.setState({ authorization: payload.data.token })
  }

  render () {
    if (!this.state.authorization) {
      return (
        <div className='app login'>
          <LoginForm onSubmit={this.onLogin.bind(this)} />
        </div>
      )
    }

    return (
      <div className='app'>
        <Navbar />
        <div className='container'>
          <Post />
          <Home />
        </div>
      </div>
    )
  }
}

export default App
