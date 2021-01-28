/* 14) Altere o programa anterior para mostrar no final a soma dos números. */

var soma = 0
var inicio = parseInt(prompt("Entre com o 1a número: "))
var fim = parseInt(prompt("Entre com o 2a número: "))

if (inicio < fim)
  for (var i = inicio+1; i < fim; i++) {
    soma += i
    console.log(i)
  }
if (inicio > fim)
  for (var i = inicio-1; i > fim; i--) {
    soma += i
    console.log(i)
  }
if (inicio == fim)
  console.log("Erro: números iguais")

console.log("Soma dos numeros: " + soma)