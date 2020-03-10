import React, { useState } from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar'
import ValidateSession from './components/ValidateSession'

import Home from './views/Home'
import Post from './views/Post'
import PostDetail from './views/PostDetail'
import Login from './views/Login'
import Logout from './views/Logout'

import api from './lib/api'

function App () {
  const [authorization, setAuthorization] = useState('')

  async function validateSession (token) {
    const payload = await api.validateSession(token)

    setAuthorization(payload.data.token)
  }

  return (
    <BrowserRouter>
      <div className='app'>
        {authorization && <Navbar />}
        <ValidateSession onValidate={validateSession} />
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
            path='/post/:id'
            component={PostDetail}
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

export default App
