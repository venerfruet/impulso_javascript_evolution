import React from "react"
import { ReactDOM } from "react"
import "./style.css"

const App=()=>{

  return(
    <div className="App">
      Vai lá Vener!!!
    </div>
  )
}

const rootElement=document.getElementById("root")
ReactDOM.render(<App />, rootElement)