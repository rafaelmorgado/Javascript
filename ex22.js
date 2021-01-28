/* 22) A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... Faça um programa que gere a série até que o valor seja maior que 500. */

var anterior = 0
var atual = 1
var proximo = 0

console.log(anterior)
console.log(atual)
while (true) {
  if (proximo <= 500) {
    proximo = atual + anterior
    anterior = atual
    atual = proximo
    console.log(proximo)
  }
}