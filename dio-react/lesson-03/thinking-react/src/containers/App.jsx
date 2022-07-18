import React from "react";
import mock from '../mock';
import Button from '../components/Button';

const App=()=>{
  
  const handleClick=(id)=>{
    console.log('ID do cliente =', id)
  }
  
  const renderCustomers=(customer, index)=>{
    return(
      <div key={`customer-${customer.id}`}>
        <li>{customer.name} <Button onClick={()=>handleClick(customer.id)}>X</Button></li>
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
      <p>Pense React</p>
      <ul>
        {mock.map(renderCustomers)}
      </ul>
    </div>
  );

};

export default App;
