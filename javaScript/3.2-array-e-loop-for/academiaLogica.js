let marina = 27;
let silvia = 18;
let iza = 63;

if (marina <  silvia && marina <  iza) {
    console.log("marina é a pessoa mais jovem e possui 27 anos de idade");
} else if (silvia <  marina && silvia < iza) {
    console.log("silvia é a pessoa mais jovem e possui 18 anos de idade");    
} else if (iza < marina && iza < silvia) {
    console.log("Iza é a pessoa mais jovem e possui 63 anos de idade");
} else if (marina === silvia || marina === iza || iza === silvia) {
    console.log("Duas ou mais pessoas tem a mesma idade");
} else {
    console.log("Idades inseridas não válidas.");
}

/* Taxa Metabólica Basal */

let age = 24
let sex = 'F'
let weight = 60
let heigh = 163

  let bmr;

  if (sex === 'M') {
    bmr = heigh * 6.25 + weight * 9.99 - age * 4.92 + 5;
  }

  if (sex === 'F') {
    bmr = heigh * 6.25 + weight * 9.99 - age * 4.92 - 161;
  }

  console.log('A taxa metabólica basal é: ' + bmr + ' Kcal') 


/*  01 - Lanchonete da Trybe */
let number = 4
  switch (number) {
    case 1:
      console.log('1 - Trybe Lanche Feliz');
      break
    case 2:
      console.log('2 - McTrybe');
      break
    case 3:
      console.log('3 - TrybeWooper');
      break
    case 4:
      console.log('4 - X-Trybe');
      break
    case 5:
     console.log('5 - Triplo Trybe com JS');
     break
    default:
      console.log('Não temos esta opção ainda :(');
  }