import React from 'react'

const listCustomer=[
  {
    id:1,
    name:'Vener Fruet da Silveira',
    skills:['React', 'Node', 'CSS', 'Webpack']
  },
  {
    id:2,
    name:'Vener Fruet',
    skills:['HTML', 'React Native', 'Go', 'JS']
  },
  {
    id:3,
    name:'Vener da Silveira',
    skills:['Assembly']
  },
  {
    id:4,
    name:'Fruet daSilveira',
    skills:['Reason']
  },
]

const App=()=>{

  const handleClick=(id)=>{
    console.log('ID do Clinete:', id)
  }

  const renderCustomers=(customer)=>{
    return(
      <div key={`customer-${customer.id}`}>
        <li>{customer.name} <button onClick={(e=>handleClick(customer.id))}>X</button></li>
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
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula!</p>
      <h1>Events Manipulation</h1>
      <ul>
        {listCustomer.map(renderCustomers)}
      </ul>
    </div>
  )
}

export default App