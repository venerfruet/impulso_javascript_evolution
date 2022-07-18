import React from 'react'

const buttonA=<button>Histórico dos Clientes</button>
const buttonB=<button>CadastrarCliente</button>

const hasCustomer=false;

const App=()=>{

  const renderShowCustomer=(
    <div>
      Clique nobotão abaixo paraver o histórico dos Clientes.
      <br/>
      {buttonA}
    </div>
  )

  const renderAddCustomer=(
    <div>
      Clique abaixo para cadastrar um cliente.
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
      <p>Bem vindo a nossa aula!</p>
      <h1>Conditional Renderization</h1>
      {hasCustomer ? renderShowCustomer : renderAddCustomer}
      <div>
        {showCustomer()}
      </div>
    </div>
  )
}

export default App