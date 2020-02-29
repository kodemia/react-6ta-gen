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

  get readTime () {
    return this.state.description.length * 60
  }

  onChange (event) {
    const { id, value } = event.target

    this.setState({ [id]: value })
  }

  onSubmit (event) {
    event.preventDefault()

    if (this.props.onSubmit) {
      this.props.onSubmit({
        ...this.state,
        readTime: this.readTime
      })
    }

    this.setState({
      title: '',
      author: '',
      description: '',
      createdAt: new Date(),
      image: ''
    })
  }

  render () {
    return (
      <div className='row post-form'>
        <form
          onSubmit={this.onSubmit.bind(this)}
          className='col-6'
        >
          <h1>Nuevo Post</h1>

          <AppInput
            id='author'
            label='Autor'
            type='text'
            ariaDescribedBy='author name'
            value={this.state.author}
            onChange={this.onChange.bind(this)}
          />

          <AppInput
            id='title'
            label='Titulo'
            type='text'
            ariaDescribedBy='post title'
            value={this.state.title}
            onChange={this.onChange.bind(this)}
          />

          <AppTextArea
            id='description'
            label='Texto'
            value={this.state.description}
            onChange={this.onChange.bind(this)}
          />

          <AppInput
            id='image'
            label='Imagen'
            type='text'
            ariaDescribedBy='url image'
            value={this.state.image}
            onChange={this.onChange.bind(this)}
          />

          <AppButton
            type='submit'
            text='Guardar'
            className='btn-primary'
          />
        </form>

        {
          this.state.image ? (
            <img
              src={this.state.image}
              alt='post preview'
              className='col-6'
            />
          ) : 'Ingresa un valor de URL en el campo image'
        }
      </div>
    )
  }
}

export default PostForm
