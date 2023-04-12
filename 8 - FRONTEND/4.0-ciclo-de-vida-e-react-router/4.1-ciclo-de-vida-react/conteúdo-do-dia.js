// Requisições e componentDidMount => função que executa algo quando for fazer uma renderização

// Quando for realizar requisições de uma API, pode ocorrer do código atualizar antes da requisição dar o retorno, e o state ficar vazio... nesse caso utilize a componentDidMount, pois assim que vc chama a função dentro dele ou cria a função nele, ele garante que o dado chegue assincronamente.

//  Primeira maneira:
fetchCharacters(); {
  fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    this.setState({characters: data.results})
  })
}

componentDidMount(); {
  this.fetchCharacters();
}

//  Segunda maneira:
componentDidMount(); {
  fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    this.setState({characters: data.results})
  })
}