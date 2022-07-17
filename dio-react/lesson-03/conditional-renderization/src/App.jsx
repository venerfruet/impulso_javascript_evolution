import React from "react";

const buttonA=<button>Histórico de Clientes</button>
const buttonB=<button>Cadastrar Clientes</button>

const hasCustomer=false

const App=()=>{

  const renderShowHistory=(
    <div>
      Clique no botão abaixo para visualizar o histórico dos clientes
      <br/>
      {buttonA}
    </div>
  )

  const renderAddCustomer=(
    <div>
      Clique no botão abaixo para cadastrar o cliente
      <br/>
      {buttonB}
    </div>
  )

  const showCustomer=()=>{
    if(!hasCustomer) return null

    return(
      <div>
        <h1>Nome do Cliente: Vener Fruet</h1>
      </div>
    )

  }

  return(
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula ;)</p>
      {hasCustomer ? renderShowHistory : renderAddCustomer}
      {showCustomer()}
    </div>
  );
};

export default App;
