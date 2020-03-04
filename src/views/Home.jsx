import React, { Component } from 'react'

import AppLoading from '../components/AppLoading'
import PostList from '../components/PostList'

import api from '../lib/api'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: [],
      loading: true
    }
  }

  async componentDidMount () {
    const payload = await api.getPosts()

    this.setState({
      posts: payload.data.posts,
      loading: false
    })
  }

  render () {
    if (this.state.loading) return <AppLoading />

    return <PostList list={this.state.posts} />
  }
}

export default Home
