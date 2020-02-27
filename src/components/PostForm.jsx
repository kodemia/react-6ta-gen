import React, { Component } from 'react'

import AppInput from './AppInput'
import AppTextArea from './AppTextArea'

import AppButton from './AppButton'

class PostForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      author: '',
      description: '',
      createdAt: new Date(),
      image: ''
    }
  }

  get timeRead () {
    return this.state.description.length * 60
  }

  onChange (event) {
    const { id, value } = event.target

    this.setState({ [id]: value })
  }

  render () {
    return (
      <div className='row post-form'>
        <form className='col-6'>
          <h1>Nuevo Post</h1>

          <AppInput
            id='author'
            label='Autor'
            type='text'
            ariaDescribedBy='author name'
            onChange={this.onChange.bind(this)}
          />

          <AppInput
            id='title'
            label='Titulo'
            type='text'
            ariaDescribedBy='post title'
            onChange={this.onChange.bind(this)}
          />

          <AppTextArea
            id='description'
            label='Texto'
            onChange={this.onChange.bind(this)}
          />

          <AppInput
            id='image'
            label='Imagen'
            type='text'
            ariaDescribedBy='url image'
            onChange={this.onChange.bind(this)}
          />

          <AppButton
            type='submit'
            text='Guardar'
            className='btn-primary'
          />
        </form>

        <img
          src={this.state.image}
          alt='image post preview'
          className='col-6'
        />
      </div>
    )
  }
}

export default PostForm
