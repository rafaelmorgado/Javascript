/* 25) Altere o programa anterior para que ele aceite apenas números entre 0 e 1000. */

var qtdNum = parseInt(prompt("Insira o tamanho do conjunto: "), 10)

var soma = 0

var numMenor = 999
var numMaior = 0

while (qtdNum > 0) {
  var num = parseInt(prompt("Entre com um número: "), 10)
  while (num > 0 && num < 1000) {
    if (num > numMaior){
      numMaior = num
      soma += numMaior
      qtdNum -= 1
      break
    }
    if (num < numMenor) {
      numMenor = num
      soma += numMenor
      qtdNum -= 1
      break
    }
    soma += num
    qtdNum -= 1
    break
  }
}

console.log("\nMaior: " + numMaior)
console.log("Menor: " + numMenor)
console.log("Soma dos números: " + soma)