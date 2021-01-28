/* 9) Uma fruteira está vendendo frutas com a seguinte tabela de preços:
                      Até 5 Kg           Acima de 5 Kg
Morango         R$ 2,50 por Kg          R$ 2,20 por Kg
Maçã            R$ 1,80 por Kg          R$ 1,50 por Kg
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. */

var fruta = prompt("G-Morango, A-Maçã: ")
var quantidade = parseFloat(prompt("Informe a quantidade: ", "0"), 10)
var preco = 0

if (quantidade > 0) {
  if (fruta == 'G') {
    if (quantidade <= 5) {
      preco = quantidade * 2.50
      console.log("Preço: R$ " + preco.toFixed(2))
    } else if (quantidade > 5 && quantidade <= 8) {
      preco = quantidade * 2.20
      console.log("Preço: R$ " + preco.toFixed(2))
    } else {
      preco = quantidade * 2.20
        if (preco > 25) {
          desconto = preco * .10
          preco -= desconto
          console.log("Preço: R$ " + preco.toFixed(2))
        } else
            console.log("Preço: R$ " + preco.toFixed(2))
    }
  } else if (fruta == 'A') {
    if (quantidade <= 5) {
      preco = quantidade * 1.80
      console.log("Preço: R$ " + preco.toFixed(2))
    } else if (quantidade > 5 && quantidade <= 8) {
      preco = quantidade * 1.50
      console.log("Preço: R$ " + preco.toFixed(2))
    } else {
      preco = quantidade * 1.50
        if (preco > 25) {
          desconto = preco * .10
          preco -= desconto
          console.log("Preço: R$ " + preco.toFixed(2))
        } else
            console.log("Preço: R$ " + preco.toFixed(2))
    }
  } else {
    console.log("\nERRO: Dado inválido\nEscolha: G-Morango ou A-Maçã")
  }
} else
    console.log("Quantidade tem que ser maior que 0")
