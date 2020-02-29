import React, { Component } from 'react'

import Navbar from './components/Navbar'

import Home from './views/Home'
import Post from './views/Post'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  onNewPost (post) {
    this.setState({
      posts: [
        ...this.state.posts,
        post
      ]
    })
  }

  render () {
    return (
      <div className='app'>
        <Navbar />

        <div className='container'>
          <Post onSubmit={this.onNewPost.bind(this)} />
          <Home posts={this.state.posts} />
        </div>
      </div>
    )
  }
}

export default App
