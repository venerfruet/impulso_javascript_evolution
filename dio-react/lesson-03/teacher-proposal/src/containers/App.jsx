import React from 'react'
import mock from '../mock'
import Tag from '../components/Tag'
import Card from '../components/Card'
import Ul from '../components/UndefinedList'
import Li1 from '../components/ListItem1'
import Li2 from '../components/ListItem2'
import Button from '../components/Button'

const App=()=>{

  const handleClick=(id)=>{
    alert(`ID do Cliente: ${id}`)
  }

  const renderCustomers=(customer)=>{
    return(
      <Card key={`customer-${customer.id}`}>
        <Button onClick={(e=>handleClick(customer.id))}>X</Button>
        <Li1>{customer.name}</Li1>
        {customer.skills.map(renderSkills)}
      </Card>
    )
  }
  
  const renderSkills=(skill, index)=>{
    return(
      <Li2 key={`skill-${index}`}>{skill}</Li2>
    )
  }

  return(
    <center>
      <Tag><h1>Digital Innovation One<br/>Impulso Javscript Evolution</h1></Tag>
      <Tag><h2>Bem vindo a nossa aula<br/></h2></Tag>
      <Tag><h3>Teacher's Proposal</h3></Tag>
      <Ul>{mock.map(renderCustomers)}</Ul>
    </center>
  )
}

export default App