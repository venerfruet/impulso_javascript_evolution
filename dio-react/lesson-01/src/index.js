import React from 'react'
import ReactDOM from 'react'
import './styles.css'

const App=()=>{

  return(
    <div className="App">
      Vai lá Vener!!!!
    </div>
  )
}

const rootElement=document.querySelector('#root')
ReactDOM.render(<App />,rootElement)