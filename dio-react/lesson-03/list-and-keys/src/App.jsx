import React from "react";

const listCustomer=[
  {
    id:1,
    name:'Lelie Fruet',
    skills:['React', 'Node', 'CSS', 'Webpack']
  },
  {
    id:2,
    name:'Vener Fruet',
    skills:['Assembly']
  },
  {
    id:3,
    name:'Fabio Fruet',
    skills:['HTML', 'React Native', 'Go', 'JS']
  },
  {
    id:4,
    name:'Heide Fruet',
    skills:['Reason']
  },
]

const App=()=>{

  const renderCustomers=(customer, index)=>{
    return(
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}</li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills=(skill, index)=>{
    return(
      <div style={{paddingLeft:'23px'}} key={`skill-${index}`}>
        <li>{skill}S</li>
      </div>
    )
  }

  return(
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula ; )</p>
      <ul>
        {listCustomer.map(renderCustomers)}
      </ul>
    </div>
  );

};

export default App;
