import React, { useState } from 'react'

import NavbarBrand from './NavbarBrand'
import NavbarToggler from './NavbarToggler'
import NavbarCollapse from './NavbarCollapse'

import styles from './index.module.css'

function Navbar () {
  const [active, setActive] = useState(false)

  function toggleNavbar () {
    setActive({ active: !active })
  }

  return (
    <nav className={`navbar navbar-expand-md ${styles.main}`}>
      <div className='container'>
        <NavbarBrand />
        <NavbarToggler onClick={toggleNavbar} />
        <NavbarCollapse active={active} />
      </div>
    </nav>
  )
}

export default Navbar
