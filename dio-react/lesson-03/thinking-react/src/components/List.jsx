import React from 'react'

const liStyle={
  listStyle:'none' 
}

const Li1=({children})=>{
  return(
    <li style={liStyle}>{children}</li>
  )
}

export default Li1