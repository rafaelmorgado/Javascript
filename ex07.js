/* 7) Faça um Programa que imprima Bom dia, Boa tarde ou Boa Noite
dependendo da hora do dia. Dica: use a classe Date. */

var horas = new Date();
horaAtual = horas.getHours()
console.log(horaAtual)

if (horaAtual >= 0 && horaAtual < 12)
  console.log("Bom dia!")
else if (horaAtual >= 12 && horaAtual < 18)
  console.log("Boa tarde!")
else
  console.log("Boa noite!")