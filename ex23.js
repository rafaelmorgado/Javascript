/* 23) Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. 
Ex.: 5!=5.4.3.2.1=120 */

var fatorial = 1
var num = parseInt(prompt("Entre com um número: "), 10)

for (var i = num; i >= 1; i--) {
  fatorial = fatorial*i
}
console.log(num + "! = " + fatorial)