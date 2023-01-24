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