// =========== UNINDO COMPONENTS DE ESTADO E EVENTO ==========

import React from 'react'


// ==================== EXEMPLO DO COURSE =========== 


class App extends React.Component {
    constructor() {
      super();
      // Removemos a declaração do estado de dentro do construtor
      // this.state = {
      //   numeroDeCliques: 0,
      // };
  
      this.handleClick = this.handleClick.bind(this); // Aqui é uma function, deve ser usado o this e bind
    }
  
    // Fazemos a definição do estado utilizando a sintaxe Public Class Field
    state = {
      numeroDeCliques: 0,
    };
  
    handleClick() {
      this.setState((estadoAnterior, _props) => ({
        numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
      }));
  
      // ou 
  
      // numeroDeCliques: this.state.numeroDeCliques + 1
    }
  
    render() {
      const { numeroDeCliques } = this.state;
      return (
        <button type="button" onClick={ this.handleClick }>
          { numeroDeCliques }
        </button>
      );
    }
  }

export default App
