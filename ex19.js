/* 19) Embaralha palavra. Construa uma função que receba uma string como parâmetro e devolva outra string com os carateres embaralhados. Por exemplo: se função receber a palavra python, pode retornar npthyo, ophtyn ou qualquer outra combinação possível, de forma aleatória. Padronize em sua função que todos os caracteres serão devolvidos em caixa alta ou caixa baixa, independentemente de como foram digitados. */

// function embaralhaPalavra(palavra) {
//     var altura = parseInt(prompt("Entre com a altura da pirâmide: "))
//     var output = ''
//     for (var i = 1; i <= altura; i++) {
//       for (var j = 1; j <= i; j++) {
//         output += j + ' '
//       }
//     console.log(output)
//     output = ''
//     }
// }

// embaralhaPalavra()

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

console.log(makeid(5));