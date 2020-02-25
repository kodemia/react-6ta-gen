import React from 'react'

function NavbarNavItemDropdown () {
  return (
    <li className='nav-item dropdown'>dropdown
      <a
        className='nav-link dropdown-toggle'
        href='#'
        id='dropdown01'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'
      >
        Dropdown
      </a>
      <div
        className='dropdown-menu'
        aria-labelledby='dropdown01'
      >
        <a
          className='dropdown-item'
          href='#'
        >
          Action
        </a>
        <a
          className='dropdown-item'
          href='#'
        >
          Another
          action
        </a>
        <a
          className='dropdown-item'
          href='#'
        >
          Something
          else here
        </a>
      </div>
    </li>
  )
}

export default NavbarNavItemDropdown
