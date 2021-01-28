/* 6) Faça um programa para a leitura de duas notas parciais de um aluno. O
programa deve calcular a média alcançada por aluno e apresentar:
a. A mensagem "Aprovado", se a média alcançada for maior ou igual a
sete;
b. A mensagem "Reprovado", se a média for menor do que sete;
c. A mensagem "Aprovado com Distinção", se a média for igual a dez.*/

var nota1 = parseInt(prompt("Entre com a 1° nota: ", "0"), 10)
var nota2 = parseInt(prompt("Entre com a 2° nota: ", "0"), 10)

var media = (nota1 + nota2) / 2 

if(media >= 7 && media < 10)
  console.log("Aprovado")
else if(media == 10)
  console.log("Aprovado com Distinção")
else
  console.log("Reprovado")