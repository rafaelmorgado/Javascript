/* 18) Data por extenso. Faça um programa que solicite a data de nascimento (dd/mm/aaaa) do usuário e imprima a data com o nome do mês por extenso.

Data de Nascimento: 29/10/1973
Você nasceu em 29 de Outubro de 1973.*/

console.log("Data de Nascimento:  ")
var dia = parseInt(prompt("dia:  "))
var mes = parseInt(prompt("mẽs:  "))
var ano = parseInt(prompt("ano:  "))

switch (mes) {
  case 01 || 1: console.log("Você nasceu em "+dia+" de Janeiro "+ano); break;
  case 02 || 2: console.log("Você nasceu em "+dia+" de Fevereiro "+ano); break;
  case 03 || 3: console.log("Você nasceu em "+dia+" de Março "+ano); break;
  case 04 || 4: console.log("Você nasceu em "+dia+" de Abril "+ano); break;
  case 05 || 5: console.log("Você nasceu em "+dia+" de Maio "+ano); break;
  case 06 || 6: console.log("Você nasceu em "+dia+" de Junho "+ano); break;
  case 07 || 7: console.log("Você nasceu em "+dia+" de Julho "+ano); break;
  case 08 || 8: console.log("Você nasceu em "+dia+" de Agosto "+ano); break;
  case 09 || 9: console.log("Você nasceu em "+dia+" de Setembro "+ano); break;
  case 10: console.log("Você nasceu em "+dia+" de Outubro "+ano); break;
  case 11: console.log("Você nasceu em "+dia+" de Novembro "+ano); break;
  case 12: console.log("Você nasceu em "+dia+" de Dezembro "+ano); break;
}