import React from 'react'
import { useState } from 'react'

function Forms() {
  const [ name, setName ] = useState('');
  const [ idade, setIdade ] = useState('');
  const [ cidade, setCidade ] = useState('');
  const [ modulo, setModulo] = useState('');
  // ou 
  // vc cria um com os objetos setados
  const [input, setInput] = useState({
    name: '',
    idade:'',
    cidade: '',
  })

  // se fosse criar uma função handler genérica, para os valores
  // só chamar no onchange normalmente.
  const handleChange = ({target}) => {
    setInput({...input, [target.name]: target.value })
  }
handleChange();

  return (
    <div>
      <h2>Bem vindo Tryber!</h2>
      <h3>Insira seus dados abaixo:</h3>
      <form>
      <label htmlFor="name"> Nome:
        <input
        value={name}
        type="text"
        name="name"
        id="name"
        placeholder='Insira seu nome...'
        onChange={ (event) => { setName(event.target.value)}}
        />
      </label>
      <label htmlFor="idade"> Idade:
        <input
        value={idade}
        type="number"
        name="idade"
        id="idade"
        placeholder='Insira sua idade...'
        onChange={ (event) => { setIdade(event.target.value)}}
        />
      </label>
      <label htmlFor="cidade"> Cidade:
        <input
        value={cidade}
        type="text"
        name="cidade"
        id="cidade"
        placeholder='Insira sua cidade...'
        onChange={ (event) => { setCidade(event.target.value)}}
        />
      </label>
      <div>
        <br />
      <label htmlFor="modulo"> Modulo atual na trybe:
        <input
        value='Fundamentos'
        type="radio"
        name="modulo"
        id="Fundamentos"
        checked={ modulo === 'Fundamentos'}
        onChange={ (event) => { setModulo(event.target.value)}}
        />
      <label htmlFor="Fundamentos"> Fundamentos </label>
        <input
        value='Front-end'
        type="radio"
        name="modulo"
        id="Front-end"
        checked={ modulo === 'Front-end'}
        onChange={ (event) => { setModulo(event.target.value)}}
        />
        <label htmlFor="Front-end"> Front-end </label>
        <input
        value='Back-end'
        type="radio"
        name="modulo"
        id="Back-end"
        checked={ modulo === 'Back-end'}
        onChange={ (event) => { setModulo(event.target.value)}}
        />
        <label htmlFor="Back-end"> Back-end </label>
        <input
        value='Ciência da Computação'
        type="radio"
        name="modulo"
        id="Ciência da Computação"
        checked={ modulo === 'Ciência da Computação'}
        onChange={ (event) => { setModulo(event.target.value)}}
        />
        <label htmlFor='Ciência da Computação'> Ciência da Computação </label>
      </label>
      </div>
      <br />
      <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Forms
