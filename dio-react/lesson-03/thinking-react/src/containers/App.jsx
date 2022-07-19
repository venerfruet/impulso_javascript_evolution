import React from 'react'
import mock from '../mock'
import Button from '../components/Button'

const App=()=>{

  const handleClick=(id)=>{
    console.log('ID do Clinete:', id)
  }

  const renderCustomers=(customer)=>{
    return(
      <div key={`customer-${customer.id}`}>
        <li>{customer.name} <Button onClick={(e=>handleClick(customer.id))}>X</Button></li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }
  
  const renderSkills=(skill, index)=>{
    return(
      <div style={{paddingLeft: '27px'}} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    )
  }

  return(
    <div>
      <h1>Digital Innovation One</h1>
      <h2>Bem vindo a nossa aula!</h2>
      <h3>Thinking React</h3>
      <ul>
        {mock.map(renderCustomers)}
      </ul>
    </div>
  )
}

export default App