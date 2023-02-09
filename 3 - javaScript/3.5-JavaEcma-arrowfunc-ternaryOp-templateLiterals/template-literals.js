//Template literals

const myName = 'Isabella';
console.log(`Welcome ${myName}!`); //crases duplas e ${variavel}


//arrow function 

//Quando não há nada no corpo da função além do que será retornado, a sintaxe da arrow function nos permite simplificar ainda mais a função printName omitindo o return e as chaves:

const printName = () => 'Lucas';
console.log(printName());

const multiplyByTwo = number => number * 2; // Além disso, podemos omitir os parênteses apenas em um cenário: quando a função recebe apenas um argumento, como podemos ver no exemplo abaixo:
console.log(multiplyByTwo(10));

//Em funções que recebem mais de um parâmetro, os parênteses não são omitidos:
const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));

//Ternary operator

// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira