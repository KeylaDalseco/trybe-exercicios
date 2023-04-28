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

componentDidMount(); { // É UTILIZADO NO MOMENTO EM QUE O COMPONENT É MONTADO, O PRIMEIRO APÓS O RENDER
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

// É UM BOLEANO QUE PERMITE A ATUALIZAÇÃO OU NÃO, OCORRE ANTES QUE O componentDidUpdate(), E DEPOIS DO componentDidMount()
shouldComponentUpdate()

// É ATIVADO TODA VEZ QUE ATUALIZO MEU ESTADO NO SETSTATE E PROPS, APOŚ PASSAR PELO DE CIMA
componentDidUpdate() 

// É ATIVADO QUANDO É NECESSÁRIO DESMONTAR O COMPONENT (QUANDO O TIMER DE UMA PROVA ACABAR POR EXEMPLO)

componentWillUnmount()
