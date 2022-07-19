import React from 'react'

const liStyle={
  listStyleType:'disclosure-closed' 
}

const Li2=({children})=>{
  return(
    <li style={liStyle}>{children}</li>
  )
}

export default Li2