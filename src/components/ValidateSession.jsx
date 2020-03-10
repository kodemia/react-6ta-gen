import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

function ValidateSession (props) {
  const [authorization, setAuthorization] = useState('')
  const { pathname } = props.match
  const { history, onValidate } = props

  useEffect(() => {
    const token = window.sessionStorage.getItem('authorization')

    function validate () {
      if (!authorization && pathname !== '/login') history.push('/login')
      if (!authorization && pathname === '/login') history.push('/')
    }

    setAuthorization(token)
    validate()

    if (onValidate) onValidate(authorization)
  }, [
    authorization,
    pathname,
    history,
    onValidate
  ])

  return <div />
}

export default withRouter(ValidateSession)
