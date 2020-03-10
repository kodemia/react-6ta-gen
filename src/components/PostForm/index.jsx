import React, { useState } from 'react'

import AppInput from '../AppInput'
import AppTextArea from '../AppTextArea'

import AppButton from '../AppButton'

import styles from './index.module.css'

function PostForm (props) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  function onSubmit (event) {
    event.preventDefault()

    if (props.onSubmit) {
      props.onSubmit({
        author,
        description,
        title,
        image,
        createdAt: new Date(),
        readTime: description.length * 60
      })
    }

    setAuthor('')
    setDescription('')
    setImage('')
    setTitle('')
  }

  return (
    <div className={`row ${styles.container}`}>
      <form
        onSubmit={onSubmit}
        className='col-6'
      >
        <h1>Nuevo Post</h1>

        <AppInput
          id='author'
          label='Autor'
          type='text'
          ariaDescribedBy='author name'
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        <AppInput
          id='title'
          label='Titulo'
          type='text'
          ariaDescribedBy='post title'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <AppTextArea
          id='description'
          label='Texto'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <AppInput
          id='image'
          label='Imagen'
          type='text'
          ariaDescribedBy='url image'
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />

        <AppButton
          type='submit'
          text='Guardar'
          className='btn-primary'
        />
      </form>

      {
        image ? (
          <img
            src={image}
            alt='post preview'
            className='col-6'
          />
        ) : 'Ingresa un valor de URL en el campo image'
      }
    </div>
  )
}

export default PostForm
