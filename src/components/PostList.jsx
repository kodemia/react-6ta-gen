import React from 'react'
import { Link } from 'react-router-dom'

import PostCard from '../components/PostCard'
import PostCardButtons from '../components/PostCard/PostCardButtons'

function PostList (props) {
  return (
    <div className='row'>
      {
        props.list.map((post, index) => (
          <Link
            key={post.id || `post-${index}`}
            className='col-md-4'
            to={`/post/${post.id}`}
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
          </Link>
        ))
      }
    </div>
  )
}

export default PostList
