import React, { Component } from 'react'

import LoginForm from '../components/LoginForm'

import api from '../lib/api'

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      authorization: ''
    }
  }

  componentDidMount () {
    const token = window.sessionStorage.getItem('authorization')

    if (token) this.props.history.replace('/')
  }

  async onLogin (auth) {
    const payload = await api.login(auth.email, auth.password)

    this.setState({ authorization: payload.data.token })

    this.props.history.replace('/')
  }

  render () {
    return (
      <div className='app login'>
        <LoginForm onSubmit={this.onLogin.bind(this)} />
      </div>
    )
  }
}

export default Login
