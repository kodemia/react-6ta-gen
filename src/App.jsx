import React from 'react'

import Navbar from './components/Navbar'

import Home from './views/Home'
import Post from './views/Post'

function App () {
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

export default App
