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

// outro exemplo de utilizar as props 

class Image extends Component {  // outra forma de fazer
  render () {
    const { source, alternativeText } = this.props;
    console.log(alternativeText);
    return <img src={ source } alt= { alternativeText }/>
  }
}
// perceba q o nome dado na descontrução receberá o valor desejado

class App extends React.Component {
  render() {
  return (
    <Image source = { cat } alternativeText = 'Cute cat staring' />
  );
}
}

// ============= RENDERIZANDO LISTAS ============= 

// SE SEUS DADOS ESTIVEREM EM UM ARRAY, VODE PODE USAR O MAP/HOFS PARA PERCORRER
//EX:

class Table extends Component {
  render() {
    const users = [
      {
        id:102,
        name: 'João',
        email: 'joão@gmail.com'
      },
      {
        id:77,
        name: 'Keyla',
        email: 'Keyla@gmail.com'
      },
    ];
    return (
      users.map(user => {  // Já havia sido criado uma props nesses components
        <div>
          <UserName name={user.name}/>       {/* const name = this.props.name */}
          <UserInfo email={user.email}/>     {/* const {email, id} = this.props */}
        </div>
      })
    )
  }
}

// ============ EXEMPLO 2 ============ CRIANDO LISTAS E ADIC KEYS

import React from 'react';

class App extends React.Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item) => {
      console.log('item: ', item);
      return (<li>{ item }</li>);

// QUANDO ADICIONAMOS ALGO, O REACT PRECISA DE KEY PARA IDENTIFICAR Q ALGO FOI ADICIONADO
      // const items = shoppingList.map((item, index) => (
      //   <li key={ index }>{ item }</li>  VC PODE USAR O INDEX OU ID DO ARRAY SE TIVER
      // ));
    });

    return (
      <div>
        <h2>Lista de compras</h2>
        <ul>
          { items }
        </ul>
      </div>
    );
  }
}


// ================= Exemplo 3 =================

const planetas = planets.map((planet) => (
  <PlanetCard
    key={ planet.name }
    planetName={ planet.name }
    planetImage={ planet.image }
  />
));
return (
  <div data-testid="solar-system">
    <Title headline="Planetas" />
    {planetas}
  </div>
);

// ================= Exemplo 4 =================

import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{ name }</p>
        <p data-testid="mission-year">{ year }</p>
        <p data-testid="mission-country">{ country }</p>
        <p data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};



// ====================== PropTypes e checagem de tipos ========== 

// 1 - iMPORTA O PROPTYPES: import PropTypes from 'prop-types';
// 2 - SE NÃO TIVER USANDO O CREATE DO REACT, USE : npm install --save-dev prop-types;
// 3 - DEVE SER UTILIZADO ANTES DE EXPORT DO COMPONENT
// 4 - DEVE SER USADO NA SEGUINTE FORMA: 

MyComponent.propTypes = {
  // Todos os validadores aqui são, por padrão, validadores opcionais.
  // Para torná-los obrigatórios, basta adicionar .isRequired
  numeroObrigatorio: PropTypes.number.isRequired,

  // Tipos básicos do JS.
  stringOpcional: PropTypes.string, // name: PropTypes.string
  numeroOpcional: PropTypes.number, // age: PropTypes.string
  booleanoOpcional: PropTypes.bool,
  funcaoOpcional: PropTypes.func,
  objetoOpcional: PropTypes.object,
  arrayOpcional: PropTypes.array,

  // Um array de determinado tipo básico
  arrayDeNumeros: PropTypes.arrayOf(PropTypes.number), // deve ser usado se o data for um array

  // Um objeto de determinado tipo básico
  objetoDeNumeros: PropTypes.objectOf(PropTypes.number), // deve ser usado se o data for um objeto


  // Um objeto com forma específica
  objetoComForma: PropTypes.shape({ // se um objeto tiver determinados dados
    name: PropTypes.string,
    age: PropTypes.number,
  }),

  // Um objeto que não permite props extras
  objetoComFormatoRigoroso: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number,
    availability: PropTypes.bool,
  }),
};
// EXEMPLO EM UM ARRAY COM OBJETO COM PROPRIEDADES VARIADAS
component.propTypes = {
  arrayData: PropTypes.arrayOf(
      PropTypes.shape({ // se um objeto tiver determinados dados
      name: PropTypes.string,
      age: PropTypes.number,
      img: PropTypes.string,
    }),
  )
}