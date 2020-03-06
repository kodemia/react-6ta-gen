import React from 'react'

import NavbarNavItem from './NavbarNavItem'

function NavbarNav () {
  return (
    <ul className='navbar-nav mr-auto'>
      <NavbarNavItem
        text='Home'
        to='/'
        active
      />

      <NavbarNavItem
        text='New Post'
        to='/post'
      />

      <NavbarNavItem
        text='Logout'
        to='/logout'
      />
    </ul>
  )
}

export default NavbarNav
