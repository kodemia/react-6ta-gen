import React, { Component } from 'react'

import PostForm from '../components/PostForm'

import api from '../lib/api'

class Post extends Component {
  async onSubmit (post) {
    const payload = await api.newPost(post)

    window.alert(payload.data.posts._id)

    this.props.history.push('/')
  }

  render () {
    return (
      <PostForm
        onSubmit={this.onSubmit.bind(this)}
      />
    )
  }
}

export default Post
