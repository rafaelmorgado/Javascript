// 1) Faça um programa que peça as 4 notas bimestrais e mostre a média.

var notas = []
var sum = 0

for(var i = 0; i < 4; i++) {
    var nota = prompt("Entre com uma nota: ", 10)
    notas.push(parseFloat(nota))
    sum += parseInt(notas[i])
}

var media = sum / notas.length
console.log(media.toFixed(2))