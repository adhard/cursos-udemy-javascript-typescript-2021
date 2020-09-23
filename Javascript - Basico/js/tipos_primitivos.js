// String
const varString = "Bear" // ou 'Bear'
console.log(typeof varString) // string

// Number
const varNumber = 10 // ou 10.52
console.log(typeof varNumber) // number

let nome //const não pode iniciar sem uma declaração de valor 
console.log(nome) // undefined -> Não aponta para nada na memoria
console.log(typeof nome) //undefined

let sobrenome = null 
console.log(sobrenome) // Null -> Não aponta para nada na memoria
console.log(typeof sobrenome) // Object

console.log(null === undefined) // False

// Boolean
const aprovado = false // ou true
console.log(aprovado) // false
console.log(typeof aprovado) // boolean

// Passagem por valor para tipos primitivos
let a1 = 2
let b1 = a1
console.log(a1, b1) // 2 2
b1 = 3
console.log(a1, b1) // 2 3

// Passagem por referencia para arrays
const a = [1,2]
const b = a
console.log(a,b) // [1,2] [1,2]
b.push(3)
console.log(a,b) // [1,2,3] [1,2,3]


// Passagem por valor para objetos
let a3 = {nome: 'bear'}
let b3 = a3
console.log(a3,b3) // { nome: 'bear' } { nome: 'bear' }

b3 = {nome: 'Code'}
console.log(a3,b3) // { nome: 'bear' } { nome: 'Code' }

/**
 * Tipos de Dados primitivos em JS
 * 
 * String, number, undefined, null, boolean, symbol
 * 
 */