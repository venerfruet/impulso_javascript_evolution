import React from 'react'

const style={
  backgroundColor:'white',
  borderRadius:'7px',
  width:'fit-content',
  padding:'0 17px'
}

const Tag=({children})=>{
  return(
    <div style={style}>{children}</div>
  )
}

export default Tag;