import React from 'react'

import styles from './index.module.css'

function PostDetail (props) {
  return (
    <div className={styles.postDetail}>
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
      <h3>{props.createdAt}</h3>

      <img src={props.img} alt='post preview' />
      <p>{props.description}</p>
    </div>
  )
}

export default PostDetail
