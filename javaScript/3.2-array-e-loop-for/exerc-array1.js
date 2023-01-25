//somar os numeros do array

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
}
console.log(result);*/

//ACHAR MEDIA ARITMETICA E SABER SE O VALOR É MAIOR QUE 20 OU NÃO

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
}
let average = sum / numbers.length;

if (average > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20')
}

console.log(average); */

//Maior valor no array

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 

let higherNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
   if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
   }
}
console.log(higherNumber) */

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}

