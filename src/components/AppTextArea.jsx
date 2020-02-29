import React, { Component } from 'react'

class AppTextArea extends Component {
  onChange (event) {
    if (this.props.onChange) this.props.onChange(event)
  }

  render () {
    const {
      id,
      label,
      rows = 3,
      value
    } = this.props

    return (
      <div className='form-group'>
        <label htmlFor={id}>
          {label}
        </label>
        <textarea
          id={id}
          rows={rows}
          value={value}
          onChange={this.onChange.bind(this)}
          className='form-control'
        />
      </div>
    )
  }
}

export default AppTextArea
