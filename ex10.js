// 10) Faça um programa que leia 5 números e informe o maior número.

var numeros = []

for (var i = 0; i < 5; i++) {
  var numero = prompt("Escreve um número", 10)
  numeros.push(parseInt(numero))
}

console.log(Math.max(...numeros))