/* 24) Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores */

var qtdNum = parseInt(prompt("Insira o tamanho do conjunto: "), 10)

var num = parseInt(prompt("Entre com um número: "), 10)
var numMaior = 0
var numMenor = 0
numMaior = numMenor = num
var soma = 0

while (qtdNum > 0) {
  if (num > numMaior)
    numMaior = num
  if (num < numMenor)
    numMenor = num
  soma += num
  qtdNum -= 1
  if (qtdNum == 0)
    break
  num = parseInt(prompt("Entre com um número: "), 10)
}

console.log("\nMaior: " + numMaior)
console.log("Menor: " + numMenor)
console.log("Soma dos números: " + soma)