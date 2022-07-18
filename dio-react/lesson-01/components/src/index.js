import React from 'react'
import ReactDom from 'react-dom'
import Button from './Button'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import './style.css'

function soma(a, b){
  alert(`A soma de ${a} mais ${b} é igual a ${a+b}`)
}

function App(){
  return(
    <div>
      Vai lá React!!!
      <br />
      <Button onClick={()=>soma(123456789,9876543210)} name="Soma ae!"></Button>
      <ComponentA>
        <ComponentB>
          <Button onClick={()=>soma(9876543210,123456789)} name="Soma de ré!"></Button>
        </ComponentB>
      </ComponentA>
    </div>
  )
}

const rootElement=document.getElementById('root')
ReactDom.render(<App />,rootElement)