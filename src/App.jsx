import React, { Component } from 'react'

import Navbar from './components/Navbar'

import Home from './views/Home'
import Post from './views/Post'

import LoginForm from './components/LoginForm'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      authorization: ''
    }
  }

  async onLogin (auth) {
    try {
      const response = await window.fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: auth.email,
          password: auth.password
        })
      })

      const payload = await response.json()

      this.setState({ authorization: payload.data.token })

      window.sessionStorage.setItem('authorization', payload.data.token)
    } catch (error) {
      window.alert('Ocurrió un error al iniciar sesión')
    }
  }

  async componentDidMount () {
    const token = window.sessionStorage.getItem('authorization')

    if (token) {
      const response = await window.fetch('http://localhost:8080/users/validate-session', {
        headers: { authorization: token }
      })

      const payload = await response.json()

      this.setState({ authorization: payload.data.token })

      window.sessionStorage.setItem('authorization', payload.data.token)
    }
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
