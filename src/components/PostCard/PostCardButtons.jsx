import React from 'react'

import AppButton from '../../components/AppButton'

function PostCardButtons (props) {
  return (
    <div className='btn-group'>
      {
        props.edit && (
          <AppButton
            text='Edit'
            size='sm'
            className='btn-outline-secondary'
          />
        )
      }
      {
        props.view && (
          <AppButton
            text='View'
            size='sm'
            className='btn-outline-secondary'
          />
        )
      }
    </div>
  )
}

export default PostCardButtons
