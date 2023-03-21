const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const preEl = document.querySelector('pre');

async function handleClick() { // usa - se o async para dizer que a função é assincrona
  const cep = inputEl.value; // pego o valor do input

  try {
    // Aqui, invés de usar o then, eu utilizo o await (esperar/aguardar) a requisição ser feita
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json(); // dentro das const ficam tipo os valores do then

    preEl.innerHTML = JSON.stringify(data);
    console.log(data);
    return data;
  } catch (error) {
    return error.message;
  }
}

await handleClick();

buttonEl.addEventListener('click', handleClick); // criei uma função para que quando eu clicar, aparece os dados do cep

///////////////////////////////// método antigo //////////////////////////////
const cep = '30130-010';
fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then((response) => response.json())
  .then((data) => console.log(data));


///////////////////////////////// método novo ////////////////////////////// sintaxe um pouco mais moderna: o await.

const cep1 = '30130-010';
const response = await fetch(`https://viacep.com.br/ws/${cep1}/json/`);
const data = await response.json();
console.log(data);

// Como podemos perceber, usar await nada mais é do que uma forma diferente de lidar com as promises. Isso significa que a sintaxe do async/await não adiciona nenhuma funcionalidade a mais ao javascript, é apenas uma forma diferente de escrever o mesmo código. Em programação quando isso acontece, chamamos de syntactic sugar, ou açúcar sintático.

// ================= utilizando async em funções

const minhaFuncaoAssincrona = async (parametro1, parametro2) => {
    // código assíncrono aqui
  };

async function bar() {
return 1;
}


// ================== como tratar erros com async e await

// Aprendemos que podemos tratar os erros lançados dentro de uma Promise com o operador .catch(). Entretanto, quando usamos a sintaxe de async/await geralmente lidamos com erros usando blocos try/catch.

const cep3 = '30130-010'; 
try {
  const response = await fetch(`https://viacep.com.br/ws/${cep3}/json/`);
  const data = await response.json();
  console.log(data);
} catch(error) {
  console.log(error)
}

// ==================== testes assíncronos

import getAddressFromCep from './getAddressFromCep.js';


test('deve retornar os dados quando passamos um cep válido', async () => {
  const address = await getAddressFromCep('30130010');
  expect(address.cep).toBe('30130-010');
  expect(address.logradouro).toBe('Praça Sete de Setembro');
  expect(address.bairro).toBe('Centro');
  expect(address.uf).toBe('MG');
});

test('deve aceitar ceps com hífen ou sem hífen', async () => {
  let address = await getAddressFromCep('30130010');
  expect(address.cep).toBe('30130-010');

  address = await getAddressFromCep('30130-010');
  expect(address.cep).toBe('30130-010');
});

test('Deve lançar erro "Você precisa passar um CEP" quando passar cep vazio', async () => {
  const emptyCep = '';

  await expect(getAddressFromCep(emptyCep)).rejects.toThrow( // quando der um erro(promise rejeitada)
    new Error('Você precisa passar um CEP')
  );
});

test('Deve lançar erro quando passar cep inválido', async () => {
  const invalidCep = 'XXXXX-XXX';
  const invalidCepLessDigits = '00000-00';
  const invalidCepMoreDigits = '00000-0000';

  await expect(getAddressFromCep(invalidCep)).rejects.toThrow();
  await expect(getAddressFromCep(invalidCepLessDigits)).rejects.toThrow();
  await expect(getAddressFromCep(invalidCepMoreDigits)).rejects.toThrow();
});