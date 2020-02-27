import React, { Component } from 'react'

import PostCard from '../components/PostCard'
import AppButton from '../components/AppButton'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: [],
      loading: true
    }
  }

  componentWillMount () {
    console.log('esto es antes de montarme')
    this.setState({ posts: [{ title: 'Post 1' }] })

    console.log(this.state.posts)
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000)
  }

  componentWillUpdate () {
    console.log('me estoy actualizando')
    console.log(this.state.posts)
  }

  componentDidUpdate () {
    console.log('ya me actualicé')
    console.log(this.state.posts)
  }

  componentWillDestroy () {
    console.log('ya me morí :c')
  }

  render () {
    if (this.state.loading) {
      return (
        <div className='d-flex justify-content-center'>
          <div className='spinner-border' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      )
    }

    return (
      <div className='row'>
        <div className='col-md-4'>
          <PostCard
            img='https://picsum.photos/id/10/200/300'
            text='Sunt sunt incididunt elit duis labore nulla laborum adipisicing.'
            readTime='10m'
          >
            <div className='btn-group'>
              <AppButton
                text='Edit'
                size='sm'
                className='btn-outline-secondary'
              />
            </div>
          </PostCard>
        </div>

        <div className='col-md-4'>
          <PostCard
            img='https://picsum.photos/id/0/200/300'
            text='Commodo sint elit elit id proident dolore velit laboris cupidatat do ad.'
            readTime='20m'
          >
            <div className='btn-group'>
              <AppButton
                text='Edit'
                size='sm'
                className='btn-outline-secondary'
              />
              <AppButton
                text='View'
                size='sm'
                className='btn-outline-secondary'
              />
            </div>
          </PostCard>
        </div>

        <div className='col-md-4'>
          <PostCard
            img='https://picsum.photos/id/20/200/300'
            text='Aute laborum cupidatat commodo minim proident cillum magna id.'
            readTime='19m'
          >
            <div className='btn-group'>
              <AppButton
                text='View'
                size='sm'
                className='btn-outline-secondary'
              />
            </div>
          </PostCard>
        </div>
      </div>
    )
  }
}

export default Home
