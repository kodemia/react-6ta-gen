import React, { Component } from 'react'

import NavbarBrand from './NavbarBrand'
import NavbarToggler from './NavbarToggler'
import NavbarCollapse from './NavbarCollapse'

class Navbar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      active: false
    }
  }

  toggleNavbar () {
    this.setState({ active: !this.state.active })
  }

  render () {
    return (
      <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <NavbarBrand />
        <NavbarToggler onClick={this.toggleNavbar.bind(this)} />
        <NavbarCollapse active={this.state.active} />
      </nav>
    )
  }
}

export default Navbar
