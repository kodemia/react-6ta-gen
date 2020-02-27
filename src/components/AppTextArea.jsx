import React, { Component } from 'react'

class AppTextArea extends Component {
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
      label,
      rows = 3
    } = this.props

    return (
      <div className='form-group'>
        <label htmlFor={id}>
          {label}
        </label>
        <textarea
          id={id}
          rows={rows}
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          className='form-control'
        />
      </div>
    )
  }
}

export default AppTextArea
