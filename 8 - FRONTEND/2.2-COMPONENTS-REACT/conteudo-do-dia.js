// =================  TIPOS DE COMPONENTS  ==================

// ========== Componentes de função:

// Componentes de função, ou funcionais, são componentes criados apenas com uma função javascript.


function Greeting(props) {
  return (
    <h1>Hello, {props.name}</h1>
  );
}

// export default Greeting;



// ========== Componentes de classe 

//são componentes criados através de uma classe que estende a classe React.


import React from 'react';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

// export default Greeting;

// Analisando o código acima, temos:

// A declaração de um componente chamado Greeting;
// O componente Greeting herda da classe Component da biblioteca react;
// O componente Greeting descreve o que vai ser mostrado para quem usar a aplicação, declarado no método obrigatório render. Nesse caso, Greeting retorna: <h1>Hello, {this.props.name}</h1>;
// O componente Greeting possui como propriedade um objeto chamado props, que contém todos os dados passados como parâmetro na hora de chamar um componente, ou seja, chamar <Greeting name="Samuel" /> faz com que o componente tenha uma prop igual a { name: "Samuel" };
// Exportamos o componente Greeting de forma que ele possa ser reutilizado na aplicação.


// ==========================  PROPS ==================

// São por elas que passamos os valores para o componente, e é como o torna reutilizável em diferentes contextos. Elas são como os parâmetros de uma função.

import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} {this.props.lastName}</h1>;
  }
}

// export default Greeting;

// ou refatorando

import React from 'react';

class Greeting extends React.Component {
  render() {
    const { name, lastName } = this.props;
    return <h1>Hello, {name} {lastName}</h1>;
  }
}

// export default Greeting;

// E em seguida utilizamos no component app que renderiza tudo

import React from 'react';
import Greeting from './Greeting';

class App extends React.Component {
  render() {
    return (
      <main>
        <Greeting name="Samuel" lastName="Silva" />
      </main>
    );
  }
}

export default App;

