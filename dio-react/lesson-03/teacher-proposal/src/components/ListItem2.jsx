import React from 'react'

const divStyle={
  paddingLeft:'23px'
}

const liStyle={
  listStyleType:'disclosure-closed'
}


const Li2=({children})=>{
  return(
    <div style={divStyle}>
      <li style={liStyle}>{children}</li>
    </div>
  )
}

export default Li2