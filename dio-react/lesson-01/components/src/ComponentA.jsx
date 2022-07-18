import React from 'react'

function componentA(props){
  return(
    <div>
      Componente A : )
      <div>{props.children}</div>
    </div>
  )
}

export default componentA