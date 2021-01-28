/* 20) Faça um programa que peça 10 números inteiros, calcule e mostre a
quantidade de números pares e a quantidade de números impares. */

var qtdNumero = 0
var qtdNumerosPares = 0
var qtdNumerosImpares = 0

for (var i = 1; i <= 10; i++) {
  var numero = parseInt(prompt("Entre com o "+ i +"° número: "), 10)
  
  if (numero % 2 == 0) {
    console.log(numero + " é par") 
    qtdNumerosPares += 1
   } else {
    console.log(numero + " é ímpar") 
    qtdNumerosImpares += 1
   }
}

console.log("Quantidade de números pares: " + qtdNumerosPares)
console.log("Quantidade de números ímpares: " + qtdNumerosImpares)