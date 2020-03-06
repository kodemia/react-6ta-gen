import React, { Component } from 'react'

import NavbarBrand from './NavbarBrand'
import NavbarToggler from './NavbarToggler'
import NavbarCollapse from './NavbarCollapse'

import styles from './index.module.css'

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
      <nav className={`navbar navbar-expand-md ${styles.main}`}>
        <div className='container'>
          <NavbarBrand />
          <NavbarToggler onClick={this.toggleNavbar.bind(this)} />
          <NavbarCollapse active={this.state.active} />
        </div>
      </nav>
    )
  }
}

export default Navbar
