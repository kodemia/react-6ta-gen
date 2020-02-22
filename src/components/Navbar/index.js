import React from 'react'

import NavbarBrand from './NavbarBrand'
import NavbarToggler from './NavbarToggler'
import NavbarCollapse from './NavbarCollapse'

function Navbar () {
  return (
    <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
      <NavbarBrand />
      <NavbarToggler />
      <NavbarCollapse />
    </nav>
  )
}

export default Navbar
