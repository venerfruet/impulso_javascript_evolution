import React from 'react'

const style={
  border:'1px solid',
  marginBottom:'13px',
  maxWidth:'300px',
  padding:'7px',
  borderRadius:'7px',
  textAlign:'left',
  backgroundColor:'white'
}

const Card=({children})=>{
  return(
    <div style={style}>{children}</div>
  )
}

export default Card