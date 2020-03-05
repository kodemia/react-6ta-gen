import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ValidateSession extends Component {
  componentDidMount () {
    const token = window.sessionStorage.getItem('authorization')

    if (!token && this.props.match.path !== '/login') this.props.history.replace('/login')
  }

  render () {
    return <div />
  }
}

export default withRouter(ValidateSession)