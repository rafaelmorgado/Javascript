/* 21) A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo. */

var n = parseInt(prompt("Escolha o n−ésimo termo da série de Fibonacci: "), 10)
var anterior = 0
var atual = 1
var proximo = 0

console.log(anterior)
console.log(atual)
for (var i = 0; i < n; i++) {
  if (i > 1) {
    proximo = atual + anterior
    anterior = atual
    atual = proximo
    console.log(proximo)
  }
}