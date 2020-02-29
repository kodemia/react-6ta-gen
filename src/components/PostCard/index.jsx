import React from 'react'

import PostCardBackground from './PostCardBackground'
import PostCardBody from './PostCardBody'

function PostCard (props) {
  return (
    <div className='card mb-4 shadow-sm'>
      <PostCardBackground
        img={props.img}
      />

      <PostCardBody
        title={props.title}
        text={props.text}
        readTime={props.readTime}
      >
        {props.children}
      </PostCardBody>
    </div>
  )
}

export default PostCard
