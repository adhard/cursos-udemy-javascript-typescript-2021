let num1 = 1500
let num2 = 2.5

// convertendo para string:
console.log( typeof num1.toString()) // string
console.log( typeof (String (num1))) // string

/**
 * 
 * Representação binaria
 * 
 */

 console.log( num1.toString(2) ) // 10111011100


 // Pegando apenas N casas decimais

 let num3 = 2.434234234
 console.log(num3.toFixed(2)) // 2.43

 /**
  * 
  * Checando se o número é um inteiro ou float
  * 
  */

console.log(Number.isInteger(num1)) // true
console.log(Number.isInteger(num3)) // false

// Outras funções do Number:  Number.isNan(valor)




/**
 * 
 * Padrão utilizado pelo Javascript para casas decimais: IEEE 754-2008
 * 
 */

 let num4 = 0.7
 let num5 = 0.1

 num4 += num5 // 0.79999999....
 num4 += num5 // 0.89999999....
 num4 += num5 // 0.99999999....

 // para que seja 1 e não 0.9999 devemos fazer:
 num4 = parseFloat(num4.toFixed(2)) // retorna 1

 // ou também
//  num4 = Number(num4.toFixed(2)) // retorna 1

 console.log(num4)