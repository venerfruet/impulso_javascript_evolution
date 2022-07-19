import React from 'react'

const style={
  listStyle:'none',
  marginBottom:'7px',
  textDecoration: 'underline'
}

const Li1=({children})=>{
  return(
    <li style={style}>{children}</li>
  )
}

export default Li1