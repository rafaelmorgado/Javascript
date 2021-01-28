/* Faça um programa que peça 10 números inteiros, calcule e mostre a
quantidade de números pares e a quantidade de números impares. */
var qtdNumero = 0

for (var i = 0; i <= 20; i++) {
  var numero = parseInt(prompt("Entre com um número: "), 10)
  
  if (numero % 2 == 0)
    var qtdNumerosPares += 1
  else
    var qtdNumerosImpares += 1
}