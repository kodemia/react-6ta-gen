import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ValidateSession extends Component {
  validate () {
    const token = window.sessionStorage.getItem('authorization')

    if (!token) {
      if (this.props.location.pathname !== '/login') this.props.history.push('/login')
    } else {
      if (this.props.location.pathname === '/login') this.props.history.push('/')
    }
  }

  componentDidMount () {
    this.validate()
  }

  componentDidUpdate () {
    this.validate()
  }

  render () {
    return <div />
  }
}

export default withRouter(ValidateSession)
