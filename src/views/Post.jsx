import React, { Component } from 'react'

import PostForm from '../components/PostForm'

class Post extends Component {
  render () {
    return (
      <PostForm
        onSubmit={this.props.onSubmit}
      />
    )
  }
}

export default Post
