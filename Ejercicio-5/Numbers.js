let altura_cm = 180;
let altura_m = 1.80;
let peso_kg = 73.75;

let redondeoArriba = Math.round(altura_m).toFixed(1);
let redondeoAbajo = Math.round(peso_kg - 1).toFixed(1);
let max_valor_mas_uno = Number.MAX_VALUE + 1;

console.log(redondeoArriba);
console.log(redondeoAbajo);
console.log(Number.MAX_VALUE === max_valor_mas_uno);