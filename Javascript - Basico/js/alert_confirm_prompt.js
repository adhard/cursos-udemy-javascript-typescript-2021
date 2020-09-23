// alert("thats ok") // alert é um atalho para window.alert()
// confirm("confirmar") // pode retornar true ou false
// const nome = prompt("Teste do prompt")
// alert('Bem vindo ' + nome) //alert('Bem vindo', nome) não funcionou !


// exercicio
// const num1 = Number(prompt("Numero 1"))
// const num2 = Number(prompt("Numero 2"))
// alert(num1 + num2)


// exercicio 2

let varA = 'A' // deve ter o valor de B
let varB = 'B' // deve ter o valor de C
let varC = 'C' // deve ter o valor de A

// opcao 1
// let auxA = varA
// varA = varB
// varB = varC
// varC = auxA

// console.log(varA, varB, varC) // B C A

// opcao 2
[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC)
