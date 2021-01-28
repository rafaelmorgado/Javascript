/* 15) Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
Tabuada de 5:
5 X 1 = 5
5 X 2 = 10
5 X 10 = 50 */

var num = parseInt(prompt("Entre com a tabuada: "))
console.log("Tabuada de : " + num)
for (var i = 1; i < 11; i++)
  console.log(num + " x " + i + " = " + num*i)