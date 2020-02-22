import React from 'react'

import NavbarNavItemActive from './NavbarNavItemActive'
import NavbarNavItem from './NavbarNavItem'
import NavbarNavItemDisabled from './NavbarNavItemDisabled'
import NavbarNavItemDropdown from './NavbarNavItemDropdown'

function NavbarNav () {
  return (
    <ul className='navbar-nav mr-auto'>
      <NavbarNavItemActive />
      <NavbarNavItem />
      <NavbarNavItemDisabled />
      <NavbarNavItemDropdown />
    </ul>
  )
}

export default NavbarNav
