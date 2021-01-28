/* 28 Altere o programa de cálculo dos números primos, informando, caso o número não seja primo, por quais número ele é divisível. */

var numero = parseInt(prompt("Entre com um número: "), 10)

if (numero == 0 || numero == 1)
  console.log(numero + " não é primo")

if (numero > 1) {
  var divisores = 0
  for (var divisor = 1; divisor < numero; divisor++) {
    if (numero % divisor == 0)
      divisores += 1
      if (divisores > 1)
        break
  }
  if (divisores > 1) {
    console.log(numero + " não é primo")
    for (var i = 1; i < numero+1; i++)
      if (numero % i == 0) {
        divisor += divisor
        console.log(numero + " é divisível por " + i)
      }
  } else
    console.log(numero + " é primo")
}