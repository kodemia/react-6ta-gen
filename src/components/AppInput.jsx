import React, { Component } from 'react'

class AppInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  onChange (event) {
    this.setState({ value: event.target.value })
    if (this.props.onChange) this.props.onChange(event)
  }

  render () {
    const {
      id,
      type,
      label,
      ariaDescribedBy,
      children
    } = this.props

    return (
      <div className='form-group'>
        <label htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          type={type}
          aria-describedby={ariaDescribedBy}
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          className='form-control'
        />
        {children}
      </div>
    )
  }
}

export default AppInput
