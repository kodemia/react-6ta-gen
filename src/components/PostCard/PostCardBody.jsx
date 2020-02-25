import React from 'react'

function PostCardBody (props) {
  return (
    <div className='card-body'>
      <p className='card-text'>
        {props.text}
      </p>
      <div className='d-flex justify-content-between align-items-center'>
        {props.children}
        <small className='text-muted'>
          {props.readTime}
        </small>
      </div>
    </div>
  )
}

export default PostCardBody
