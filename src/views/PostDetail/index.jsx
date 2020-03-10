import React, { useState, useEffect } from 'react'

import PostDetailComponent from '../../components/PostDetail'

import api from '../../lib/api'

function PostDetail (props) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [createdAt, setCreatedAt] = useState(new Date())
  const [image, setImage] = useState('')

  const { id } = props.match.params

  useEffect(() => {
    async function getPost () {
      const payload = await api.getPost(id)

      setTitle(payload.data.posts.title)
      setAuthor(payload.data.posts.author)
      setDescription(payload.data.posts.description)
      setCreatedAt(payload.data.posts.dateCreated)
      setImage(payload.data.posts.imageUrl)
    }

    getPost()
  }, [
    id,
    title,
    author,
    description,
    createdAt,
    image
  ])

  return (
    <PostDetailComponent
      title={title}
      author={author}
      createdAt={createdAt.toString()}
      img={image}
      description={description}
    />
  )
}

export default PostDetail
