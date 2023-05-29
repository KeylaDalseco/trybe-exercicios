import './App.css';
import React, { useState } from 'react';

function Contador() {

  // counter - é a variavel que guarda os valores do estado - igual ao state;
  // setCounter - é como o this.setState, usado para atualizar o estado;
  // useState() - onde vc passa o estado inicial - pode ser numero, string ou um objeto;
  const [ counter, setCounter ] = useState(0) // aqui dentro eu passo o estado inicial

  return (
    <div>
      <h1>{`Counter:${counter}`}</h1>
      <button
      type='button'
      onClick={ () => { setCounter(counter - 1 )}}>-
        Incrementar
      </button>
      <button
      type='button'
      onClick={ () => { setCounter(counter + 1 )}}>+
        Incrementar
      </button>
    </div>
  );
}

export default Contador;