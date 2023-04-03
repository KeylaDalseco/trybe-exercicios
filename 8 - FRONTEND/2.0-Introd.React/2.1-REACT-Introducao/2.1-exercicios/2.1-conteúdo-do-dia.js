// CRIAÇÃO DA APLICAÇÃO EM REACT 

// RODE O COMANDO --> npx create-react-app nome-da-aplicacao
// ASSIM SERÁ CRIADO ARQUIVOS DO REACT JÁ CONFIGURADOS, PODENDO SER UTILIZADO O JSX

// DEPOIS RODE:
// cd nome-da-aplicacao --> ENTRE NA PASTA
// npm start --> RODE O COMANDO PARA ABRIR O SERVER
// O comando npm start é um script predefinido pelo React que inicia o servidor da sua aplicação. Utilizando esse comando, uma nova página deverá abrir no seu navegador, contendo a sua aplicação.


// JSX -> JAVASCRIPT SINTAX EXTENSION

// A utilização do jsx é recomendada pela documentação do React, pois ela demonstra como a interface deverá se comportar, de forma lógica e descritiva. JSX só funcionam dentro do contexto do React, ou seja, não funcionam em JS puro.

// EXEMPLO:  const element = <h1>Hello, world!</h1>;

// Caso fossemos declarar a mesma variável sem o JSX, precisaríamos utilizar funções como o createElement que recebe como parâmetro um componente, um objeto com as props e o conteúdo que será encapsulado por este componente. Seriam necessárias sequências relativamente longas de instruções de código para conseguirmos montar e manipular uma árvore de componentes. Para visualizarmos essa complexidade, vamos refazer o código acima sem o JSX:

// EXEMPLO:
// const element = React.createElement('h1', null, 'Hello, world')


// Por ser um código Javascript, o JSX permite injeções de algoritmos dentro da estrutura HTML. Portanto, é possível que se aplique diretamente na estrutura da aplicação códigos que renderizarão outras diversas expressões, por exemplo:


const nome = 'Jorge Maravilha';
const element = <h1>Hello, {nome}</h1>; // OBSERVE QUE FOI UTILIZADA CONOTAÇÃO DE CHAVES PARA CHAMAR A VARÁVEL

// E se aprofundarmos um pouco mais chamando uma função na nossa constante element?
function nomeCompleto (nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

const element3 = <h1>Hello, {nomeCompleto('Jorge', 'Maravilha')}</h1>;
// Agora, vamos incorporar a nossa constante element na função helloWorld, retornar um código JSX e encapsulá-la em uma div:


function helloWorld (nome, sobrenome) {
  return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}

const element2 = helloWorld('Jorge', 'Maravilha');
const container = <div>{element2}</div>;
// No JSX é necessário substituir class por className, para evitar conflitos entre o Javascript e o HTML, mas também podemos utilizar expressões Javascript para atribuir valor à este atributo.


const nome1 = 'Jorge Maravilha';
const classe = 'hello-class';
const element1 = <h1 className={classe}>Hello, {nome1}</h1>;

// PARA CRIAR UM COMPONENT DE CLASS NO REACT --> UTILIZA - SE:

// Reparou que o nome do componente começa com letra maiúscula? Essa é uma convenção importante do React, para diferenciar os componentes dos elementos HTML.

import React from 'react';

class ReactClass extends React.Component {
  render() {
    return (
      <h1>My first React Class Component!</h1>
    )
  }
}
