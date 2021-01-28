/* 8) Faça um Programa que peça os 3 lados de um triângulo. O programa deverá
informar se os valores podem ser um triângulo. Indique, caso os lados
formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.
Dicas:
■ Três lados formam um triângulo quando a soma de quaisquer dois
lados for maior que o terceiro;
■ Triângulo Equilátero: três lados iguais;
■ Triângulo Isósceles: quaisquer dois lados iguais;
■ Triângulo Escaleno: três lados diferentes; */

var l1 = parseInt(prompt("Lado 1: ", "0"), 10)
var l2 = parseInt(prompt("Lado 1: ", "0"), 10)
var l3 = parseInt(prompt("Lado 1: ", "0"), 10)

if (l1 > (l2 + l3) || l2 > (l1 + l3) || l3 > (l1 + l2))
  console.log("Não pode ser um triângulo")
else if (l1 == l2 == l3)
	console.log("Triângulo Equilátero")
else if (l1 == l2 || l1 == l3 || l2 == l3)
	console.log("Triângulo Isósceles")
else
	console.log("Triângulo Escaleno")