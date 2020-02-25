import React from 'react'

import NavbarNav from './NavbarNav'
import NavbarNavSearch from './NavbarNavSearcher'

function NavbarCollapse () {
  return (
    <div
      id='navbarsExampleDefault'
      className='collapse navbar-collapse'
    >
      <NavbarNav />
      <NavbarNavSearch />
    </div>
  )
}

export default NavbarCollapse
