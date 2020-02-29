import React from 'react'

import NavbarNav from './NavbarNav'
import NavbarNavSearch from './NavbarNavSearcher'

function NavbarCollapse (props) {
  const styles = ['collapse', 'navbar-collapse']

  if (props.active) styles.push('show')

  const className = styles.join(' ')

  return (
    <div className={className}>
      <NavbarNav />
      <NavbarNavSearch />
    </div>
  )
}

export default NavbarCollapse
