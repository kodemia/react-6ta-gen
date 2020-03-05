const API_URL = 'http://192.168.9.20:8080'

async function login(email, password) {
  const emptyResponse = { data: { token: '' } }

  try {
    const response = await window.fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })

    if (!response.ok) {
      if (response.status >= 500) window.alert('El server esta morido :c')
      else window.alert('Las credenciales son incorrectas')

      return emptyResponse  
    }

    const payload = await response.json()

    window.sessionStorage.setItem('authorization', payload.data.token)

    return payload
  } catch (error) {
    window.alert('Ocurrió un error al iniciar sesión')

    return emptyResponse
  }
}

async function validateSession(token) {
  const emptyResponse = { data: { token: '' } }

  if (!token) return emptyResponse

  try {
    const response = await window.fetch(`${API_URL}/users/validate-session`, {
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
  const emptyResponse = { data: { posts: [] } }

  try {
    const token = window.sessionStorage.getItem('authorization')

    const response = await window.fetch(`${API_URL}/posts`, {
      headers: { authorization: token }
    })

    const payload = await response.json()

    if (!response.ok) {
      if (response.status >= 500) window.alert('El server esta morido :c')
      else window.alert('Las credenciales son incorrectas')

      return emptyResponse  
    }

    payload.data.posts = payload.data.posts.map((badPost) => ({
      image: badPost.imageUrl,
      title: badPost.title,
      text: badPost.description,
      readTime: badPost.readingTime
    }))

    return payload
  } catch (error) {
    window.alert('Ocurrió un error al obtener los posts')

    return emptyResponse
  }
}

async function newPost (post) {
  try {
    const token = window.sessionStorage.getItem('authorization')

    const response = await window.fetch(`${API_URL}/posts`, {
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
