/* 26) Altere o programa de cálculo do fatorial, permitindo ao usuário calcular o fatorial várias vezes e limitando o fatorial a números inteiros positivos e menores que 16. */

var fatorial = 1
var num = parseInt(prompt("Entre com um número: "), 10)

while (num > -1 && num < 16) {
  for (var i = num; i >= 1; i--)
    fatorial = fatorial*i
  console.log(num + "! = " + fatorial)
  fatorial = 1
  num = parseInt(prompt("Entre com um número: "), 10)
} console.log("Fim do programa:\nApenas fatorial de números inteiros positivos e menores que 16.")