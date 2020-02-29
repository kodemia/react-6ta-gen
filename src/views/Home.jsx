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
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000)
  }

  render () {
    if (this.state.loading) return <AppLoading />

    return <PostList list={this.props.posts} />
  }
}

export default Home
