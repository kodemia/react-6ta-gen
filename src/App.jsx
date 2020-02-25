import React from 'react'

import Navbar from './components/Navbar'

import PostCard from './components/PostCard'
import AppButton from './components/AppButton'

function App () {
  return (
    <div className='app'>
      <Navbar />

      <div className='container'>
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
      </div>
    </div>
  )
}

export default App
