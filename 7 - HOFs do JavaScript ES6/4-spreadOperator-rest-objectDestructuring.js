// ================== Spread Operator ==================

// array original
const items = ['Camiseta', 'Carregador', 'Chinelo'];

// espalha o array items e adiciona o elemento 'Meia'
const newItems = [...items, 'Meia']; // -> Aqui estou adicionando o item meia no array
     // newItens é um clone do array
console.log(newItems);

//Exemplo 1

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);

//Exemplo com objetos

const products = {
    id: 1,
    name: 'Camiseta',
};

const productPrice = {
  price: 23
}

// espalha o objeto `product` e espalha o objeto `productPrice`
const newProduct = { ...products, ...productPrice };

console.log(newProduct); // {id: 1, name: 'Camiseta', price: 23}


// Exemplo 2 com função 


const specialFruit = ['banana', 'maçã', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'aveia', 'mel'];

// const fruitSalad = (fruit, additional) => {
//   // basta atribuirmos os dois arrays a uma constante usando o spread operator e retorná-lo ao final da função.
//   const fruitSaladaWithAdditional = [...fruit, ...additional];
//   return fruitSaladaWithAdditional;
// };

//ou  

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));


// ================== REST ================== Com o rest no parametro, vc pode passar vários parametros

const countParams = (...args) => {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(countParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(countParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

//Exemplo 2

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0); //COM O ...ARGS VC PASSA VÁRIOS PARAMETROS PARA ESSA FUNÇÃO
console.log(sum(4, 7, 8, 9, 60)); // 88


// ================== Object Destructuring ================== ACESSA PROPRIEDADES DO OBJETO E REATRIBUI NOME AS CHAVES

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const {name} = product; //me tras o valor da chave que quero = que está dentro daquele objeto
console.log(name);

// const { name, seller } = product; Aqui acessa 2 chaves


// definindo o objeto
const character = {
  name1: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
const { name1, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name1}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// para acessar as chaves ou objetos desejados

// const { name1, age, description: {
//   specieName, jedi
// } } = character

// console.log( `Meu nome é ${name1}, tenho ${age} anos e minha espécie é ${specieName}, é ${jedi} que sou jedi!`)



// Exemplo 2

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
 };
 
 const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
 };
 
 
 const personLikes = ({ name, age, likes }) => ( // Você pode usar ele também como parametro da função.
  `${name} is ${age} years old and likes ${likes.join(', ')}.`
 );
 
 console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
 console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'


 // Exemplo 3 ===== criando uma nova prorpiedade no objeto

 const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian

