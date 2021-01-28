/* 2) Faça um programa que peça a temperatura em graus Fahrenheit, transforme
e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9). */

var F = prompt("Entre a temperatura em °F: ", 10);
var celcius = 5 * ((F-32) / 9)
console.log(celcius.toFixed(2) + "°C")