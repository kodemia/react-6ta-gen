import React, { useEffect } from 'react'

function Logout (props) {
  const { replace } = props.history

  useEffect(() => {
    window.sessionStorage.removeItem('authorization')

    replace('/login')
  }, [replace])

  return (
    <div />
  )
}

export default Logout
