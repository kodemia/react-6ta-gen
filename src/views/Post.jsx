import React, { Component } from 'react'

import PostForm from '../components/PostForm'

class Post extends Component {
  async onSubmit (post) {
    const token = window.sessionStorage.getItem('authorization')

    const response = await window.fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: token
      },
      body: JSON.stringify({
        title: post.title,
        author: post.author,
        imageUrl: post.image,
        readingTime: post.readTime,
        description: post.description
      })
    })

    const payload = await response.json()

    window.alert(payload.data.posts._id)
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
