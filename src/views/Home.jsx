import React, { Component } from 'react'

import AppLoading from '../components/AppLoading'
import PostList from '../components/PostList'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: [],
      loading: true
    }
  }

  componentDidMount () {
    setInterval(async () => {
      this.setState({
        loading: true
      })

      const token = window.sessionStorage.getItem('authorization')

      const response = await window.fetch('http://localhost:8080/posts', {
        headers: { authorization: token }
      })

      const payload = await response.json()

      const posts = payload.data.posts.map((badPost) => ({
        image: badPost.imageUrl,
        title: badPost.title,
        text: badPost.description,
        readTime: badPost.readingTime
      }))

      this.setState({
        posts,
        loading: false
      })
    }, 2000)
  }

  render () {
    if (this.state.loading) return <AppLoading />

    return <PostList list={this.state.posts} />
  }
}

export default Home
