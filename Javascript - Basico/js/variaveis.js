var testeVar = 10
console.log(testeVar) // 10

testeVar = 11
console.log(testeVar) // 11

let testeLet = 10
console.log(testeLet) // 10

testeLet = 11
console.log(testeLet) // 11

const testeConst = 10
console.log(testeConst) // 10

//testeConst = 11 // Error
//console.log(testeConst)


var varScopo = "Teste"

function teste(){
    console.log(varScopo) // "Teste"
}

teste()


let letScopo = "Teste"

function teste2(){
    console.log(letScopo) // Teste
}

teste2()


console.log(x); //undefined
var x=5;
console.log(x); // 5

console.log(x); // 5
//let x=5; // já está declarado
console.log(x);



// nomes de variaiveis

let camelCase = 10
let _algumacoisa = "alguma coisa"
// let 123X // noooo!
// let .teste // NOOOO!

const variavelConstante = 10
console.log(variavelConstante)
console.log(typeof(variavelConstante)) //number
console.log(typeof variavelConstante) //number