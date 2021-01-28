/* 29) Faça um programa que mostre todos os primos entre 1 e N sendo N um número inteiro fornecido pelo usuário.
O programa deverá mostrar também o número de divisões que ele executou para encontrar os números primos.
Serão avaliados o funcionamento, o estilo e o número de testes (divisões) executados. */

var n = parseInt(prompt("Entre com N: "), 10)

if (n > 1) {
  var divisores = 0
  for (var numero = 1; numero < n; numero++) {
    for (var divisor = 1; divisor < n; divisor++) {
      if (numero % divisor == 0)
        divisores += 1
        if (divisores > 1)
          break
    }
    if (divisores > 1) {
      divisores = 0
      console.log(numero + " não é primo")
    } else {
      divisores = 0
      console.log(numero + " é primo")
    }
  }
}