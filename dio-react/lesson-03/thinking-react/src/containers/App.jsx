import React from 'react'
import mock from '../mock'
import Button from '../components/Button'
import Li1 from '../components/List'
import Li2 from '../components/Li2'

const App=()=>{

  const handleClick=(id)=>{
    console.log('ID do Clinete:', id)
  }

  const renderCustomers=(customer)=>{
    return(
      <div key={`customer-${customer.id}`}>
        <Li1>{customer.name} <Button onClick={(e=>handleClick(customer.id))}>X</Button></Li1>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }
  
  const renderSkills=(skill, index)=>{
    return(
      <div style={{paddingLeft: '27px'}} key={`skill-${index}`}>
        <Li2>{skill}</Li2>
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