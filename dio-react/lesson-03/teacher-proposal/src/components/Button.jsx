import React from 'react'

const style={
  float:'right',
  cursor:'pointer',
  fontWeight:'bold'
}

const Button=({children,onClick})=>{
  return(
    <button style={style} onClick={onClick}>{children}</button>
  )
}

export default Button