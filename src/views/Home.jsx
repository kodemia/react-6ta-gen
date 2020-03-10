import React, { useState, useEffect } from 'react'

import AppLoading from '../components/AppLoading'
import PostList from '../components/PostList'

import api from '../lib/api'

function Home () {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getPosts () {
      const token = window.sessionStorage.getItem('authorization')

      if (token) {
        const payload = await api.getPosts()

        if (posts.length !== payload.data.posts.length) setPosts(payload.data.posts)
      }

      setLoading(false)
    }

    getPosts()
  }, [posts, loading])

  if (loading) return <AppLoading />

  return <PostList list={posts} />
}

export default Home
