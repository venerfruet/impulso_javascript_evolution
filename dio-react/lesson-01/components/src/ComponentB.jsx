import React from 'react'

function componentB(props){
  return(
    <div>
      <div>
        Componente B ; )
        {props.children}
      </div>
    </div>
  )
}

export default componentB