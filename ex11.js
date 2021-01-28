/* 11) Faça um programa que leia 5 números e informe a soma e a média dos
números. */

var numeros = []

for (var i = 1; i <= 5; i++) {
    var numero = prompt("Entre com o " + i + " número: ", 10)
    numeros.push(parseFloat(numero))
}

const soma = (accumulator, currentValue) => accumulator + currentValue

var media = numeros.reduce(soma) / numeros.length

console.log("Soma dos números: " + numeros.reduce(soma).toFixed(2))
console.log("Média dos números: " + media.toFixed(2))