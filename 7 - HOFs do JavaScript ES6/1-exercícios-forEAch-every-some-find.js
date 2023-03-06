//==== forEach() - para cada ==================

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  // 1 - criei a função com o forEach dentro
  
  const cadastroEmail = (array) => {
  const mensagemCadastro = array.forEach(email => {
console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
  });
  return mensagemCadastro;
  }
  console.log(cadastroEmail(emailListInData));

// ou vc pode fazer assim

// // 1 - fazer a mensagem de email separado
  const emailChecker = (email) => {
    console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
    console.log('----------');
  }
// // 2 -  criar o forEach com o callback
emailListInData.forEach(emailChecker);
console.log(cadastroEmail(emailListInData));

// Exemplo 2

emailListInData.forEach((email) => console.log(`O email ${email} está cadastrado em nosso banco de dados!`));

var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];

function getAverageAge(list) {
  let soma = 0;
  list.forEach((idade) => soma += idade.age)
  return Math.round(soma / list.length);
}
console.log(getAverageAge(list1));

//Exemplo 3 - Verificar se o personagem possui poderes ou não. Adicionar a propriedade isFighter com o valor true (para quando tiver poderes) ou false (quando não tiver poderes). Faça isso para todos os personagens.

//const data = require('./database'); local onde está o array de objetos.

function isFighter() {
  data.characters.forEach((character) => {
    if(character.powers.length === 0){
      character.isFighter = false;
    } else {
      character.isFighter = true;
    }
  })
  return data.characters;
}

console.log(isFighter());





// =====  find() = encontrar o 1º elemento - retorna o valor ==========




//Exemplo 1

const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

idades.find((idade) => idade > 50); // 73

//Exemplo 2 - caso vc tente algo que não tem, retornará undefined

const idades2 = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

idades.find((idade) => idade === 33); // undefined

//Exemplo 3 - retornar o primeiro número do array que é divisível por 3 e 5

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyNUmbers = numbers.find((number) => number % 3 === 0 && number % 5 === 0); // é necessário guardar na variável para ver o valor
console.log(verifyNUmbers);

// Exemplo 4 - encontre o primeiro nome com cinco letras, caso ele exist
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const nameLengthFive = names.find((name) => name.length === 5);
console.log(nameLengthFive);

// ou fazer uma função para ela 

const names2 = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names2.find((name) => name.length === 5);
};

console.log(findNameWithFiveLetters()); // Irene





// =====  some() = encontrar UM elemento - retorna booleano ==========



//Exemplo 1 

const pessoas = [
  { nome: 'Ana', cargo: 'Analista' },
  { nome: 'João', cargo: 'Gerência' },
  { nome: 'Aline', cargo: 'Analista' },
  { nome: 'Joana', cargo: 'Gerência' },
];

const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência');

console.log(verificaCargo); // true

//Exemplo 2

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('X', listNames)); // false




// =====  every() = verifica todos elementos - retorna booleano ==========

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = Object.values(grades).every((grade) => grade === 'Aprovado'); // false

console.log(verifyGrades);