import React, { useState, useEffect } from 'react'

import LoginForm from '../../components/LoginForm'

import api from '../../lib/api'

import styles from './index.module.css'

function Login (props) {
  const [authorization, setAuthorization] = useState('')
  const { replace } = props.history

  useEffect(() => {
    const token = window.sessionStorage.getItem('authorization')

    if (token) replace('/')
  }, [replace, authorization])

  async function onLogin (auth) {
    const payload = await api.login(auth.email, auth.password)

    setAuthorization(payload.data.token)

    replace('/')
  }

  return (
    <div className={styles.view}>
      <LoginForm onSubmit={onLogin} />
    </div>
  )
}

export default Login
