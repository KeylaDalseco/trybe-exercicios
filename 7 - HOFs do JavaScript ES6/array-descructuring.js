// ================== EXERCÍCIO DE FIXAÇÃO ARRAYS =============

const primeNumbers = [17, 23, 37]

const sum1 = (a, b) => {
  console.log(a + b);
}

sum1(primeNumbers[0], primeNumbers[2]) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [number1, number2, number3] = primeNumbers;
console.log(sum1(number1, number3))


// ========================================================

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares //as virgulas pulam o valor
console.log(numerosPares); // [6, 8, 10, 12];


// ========================================================

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal]

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// ================== criando uma nova prorpiedade no array

const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

// ============= exercicio de fixação de Defalt destructuring ==========

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

const { nationality = 'Brazilian' } = person; // não funcionou
const personCopy = {...person, nationality:'Brazilian'} // assim também funcionaria

const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));


// ============= exercicio de fixação de property shorthand ==========

// const getPosition = (latitude, longitude) => ({
//   latitude: latitude,   // invés de repetir a mesma coisa, vc declarar só uma vez fia mais legível
//   longitude: longitude,
// });

const getPosition = (latitude, longitude) => ({
  latitude,   // invés de repetir a mesma coisa, vc declarar só uma vez fia mais legível
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));


// ============= exercicio de fixação de Default Parameters ==========

const greeting1 = (user) => console.log(`Welcome ${user}!`);

greeting1(); // Welcome undefined!


// Você verá que a função retornará undefined se não passar parametro para ela. Você consegue pensar em uma forma de corrigir esse problema? Afinal, podemos esquecer de chamar a função com o nome da pessoa usuária. Uma solução seria:

const greeting2 = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'pessoa usuária' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting2(); // Welcome pessoa usuária!

// porém, existe uma forma melhor com o defalt parameters

const greeting = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome pessoa usuária!

// Exemplo 2

const multiply = (number, value = 1)  => number * value

console.log(multiply(8));

