import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

const element="Digital Inoovation One"
const element2=<h1>Uau!!!</h1>

const App=()=>{

  return(
    <div>
      {element}
      {element2}
    </div>
  )
}

const rootElement=document.getElementById("root")
ReactDOM.render(<App />, rootElement)