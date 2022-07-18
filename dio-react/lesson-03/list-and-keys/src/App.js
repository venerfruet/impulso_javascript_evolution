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

const renderCustomers=(customer)=>{
  return(
    <div key={`customer-${customer.id}`}>
      <li>{customer.name}</li>
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

const App=()=>{
  return(
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula!</p>
      <p>List And Keys</p>
      <ul>
        {listCustomer.map(renderCustomers)}
      </ul>
    </div>
  )
}

export default App