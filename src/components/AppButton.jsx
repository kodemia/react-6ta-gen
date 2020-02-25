import React from 'react'

function AppButton (props) {
  const styles = ['btn']

  const {
    type = 'button',
    text,
    size,
    className
  } = props

  if (size) styles.push(`btn-${size}`)
  if (className) styles.push(className)

  const localClassName = styles.join(' ')

  return (
    <button
      type={type}
      className={localClassName}
    >
      {text}
    </button>
  )
}

export default AppButton
