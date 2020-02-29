import React from 'react'

import PostCard from '../components/PostCard'
import PostCardButtons from '../components/PostCard/PostCardButtons'

function PostList (props) {
  return (
    <div className='row'>
      {
        props.list.map((post, index) => (
          <div
            key={post.id || `post-${index}`}
            className='col-md-4'
          >
            <PostCard
              title={post.title}
              img={post.image}
              text={post.text}
              readTime={post.readTime}
            >
              <PostCardButtons
                edit={post.edit}
                view={post.view}
              />
            </PostCard>
          </div>
        ))
      }
    </div>
  )
}

export default PostList
