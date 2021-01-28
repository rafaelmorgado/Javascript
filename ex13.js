/* 13) Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles. */

var inicio = parseInt(prompt("Entre com o 1a número: "))
var fim = parseInt(prompt("Entre com o 2a número: "))

if (inicio < fim)
  for (var i = inicio+1; i < fim; i++) {
    console.log(i)
  }
if (inicio > fim)
  for (var i = inicio-1; i > fim; i--) {
    console.log(i)
  }
if (inicio == fim)
  console.log("Erro: números iguais")