import React from 'react'

function NavbarNavItemActive () {
  return (
    <li className='nav-item active'>
      <a
        className='nav-link'
        href='#'
      >
        Home <span className='sr-only'>(current)</span>
      </a>
    </li>
  )
}

export default NavbarNavItemActive
