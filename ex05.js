// 5) Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

var letra = prompt("Entre com uma letra: ")

if (letra == 'a' || 
    letra == 'e' || 
    letra == 'i' || 
    letra == 'o' || 
    letra == 'u')
  console.log(letra + " é vogal")
else
  console.log(letra + " é consoante")