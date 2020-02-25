import React from 'react'

function NavbarNavItem (props) {
  return (
    <li className='nav-item'>
      <a
        className='nav-link'
        href={props.to}
      >
        {props.text}
      </a>
    </li>
  )
}

export default NavbarNavItem
