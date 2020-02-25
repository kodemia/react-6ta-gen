import React from 'react'

function PostCardBackground (props) {
  return (
    <img
      className='bd-placeholder-img card-img-top'
      width='100%'
      height='225'
      src={props.img}
      alt={props.alt}
    />
  )
}

export default PostCardBackground
