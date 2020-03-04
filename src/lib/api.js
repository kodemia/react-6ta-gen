async function login(email, password) {
  try {
    const response = await window.fetch('http://localhost:8080/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })

    const payload = await response.json()

    window.sessionStorage.setItem('authorization', payload.data.token)

    return payload
  } catch (error) {
    window.alert('Ocurrió un error al iniciar sesión')

    return {
      data: {
        token: ''
      }
    }
  }
}

async function validateSession(token) {
  const emptyResponse = { data: { token: '' } }

  if (!token) return emptyResponse

  try {
    const response = await window.fetch('http://localhost:8080/users/validate-session', {
      headers: { authorization: token }
    })

    const payload = await response.json()

    window.sessionStorage.setItem('authorization', payload.data.token)

    return payload
  } catch (error) {
    window.alert('Ocurrió un error al validar sesión')

    return emptyResponse
  }
}

async function getPosts() {
  try {
    const token = window.sessionStorage.getItem('authorization')

    const response = await window.fetch('http://localhost:8080/posts', {
      headers: { authorization: token }
    })

    const payload = await response.json()

    payload.data.posts = payload.data.posts.map((badPost) => ({
      image: badPost.imageUrl,
      title: badPost.title,
      text: badPost.description,
      readTime: badPost.readingTime
    }))

    return payload
  } catch (error) {
    window.alert('Ocurrió un error al obtener los posts')

    return {
      data: {
        posts: []
      }
    }
  }
}

async function newPost (post) {
  try {
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

    return payload
  } catch (error) {
    window.alert('Ocurrió un error al guardar el post')

    return {
      data: {
        post: {
          _id: '',
          title: ''
        }
      }
    }
  }
}

const api = {
  login,
  validateSession,
  getPosts,
  newPost
}

export default api
