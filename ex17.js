/* 17) Faça um programa para imprimir:
1
1 2
1 2 3
.....
1 2 3 ... n
para um ​ n ​ informado pelo usuário. Use uma função que receba um valor ​ n ​ inteiro imprima até a n-ésima linha. */

function desenhaPiramide() {
    var altura = parseInt(prompt("Entre com a altura da pirâmide: "))
    var output = ''
    for (var i = 1; i <= altura; i++) {
      for (var j = 1; j <= i; j++) {
        output += j + ' '
      }
    console.log(output)
    output = ''
    }
}

desenhaPiramide()