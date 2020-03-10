import React from 'react'

import PostForm from '../components/PostForm'

import api from '../lib/api'

function Post (props) {
  async function onSubmit (post) {
    const payload = await api.newPost(post)

    window.alert(payload.data.posts._id)

    props.history.push('/')
  }

  return (
    <PostForm
      onSubmit={onSubmit}
    />
  )
}

export default Post
