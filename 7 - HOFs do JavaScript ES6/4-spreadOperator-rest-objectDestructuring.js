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

const product = {
    id: 1,
    name: 'Camiseta',
};

const productPrice = {
  price: 23
}

// espalha o objeto `product` e espalha o objeto `productPrice`
const newProduct = { ...product, ...productPrice };

console.log(newProduct); // {id: 1, name: 'Camiseta', price: 23}


// Exemplo 2 com função 


const specialFruit = ['banana', 'maçã', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'aveia', 'mel'];

const fruitSalad = (fruit, additional) => {
  // basta atribuirmos os dois arrays a uma constante usando o spread operator e retorná-lo ao final da função.
  const fruitSaladaWithAdditional = [...fruit, ...additional];
  return fruitSaladaWithAdditional;
};

console.log(fruitSalad(specialFruit, additionalItens));