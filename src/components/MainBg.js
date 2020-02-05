import React from 'react'

export default function MainBg(props) {
  return (
    <header className={props.bg}>
      {props.children}
    </header>
  )
}

MainBg.defaultProps = {
  bg: 'main-bg'
}
