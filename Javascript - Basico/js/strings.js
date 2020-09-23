//               01234567
let umaString = "um texto"

console.log(umaString.charAt(6)) // t
console.log(umaString.charCodeAt(6)) // >> 116, que é o codigo na tabela asci do t
console.log(umaString.concat(' em um lindo dia')) // >> um texto em um lindo dia
console.log(umaString.indexOf('texto')) // >> 3, pois a palavra texto começo no indice 3
console.log(umaString.indexOf('um', 3)) // procurar a palavra um a partir do indice 3, neste caso retornaria -1
console.log(umaString.lastIndexOf('um')) // faz a mesma coisa que o indexOf, porém, começa do final da string para o inicio <


console.log(umaString.match(/[a-z]/g)) // expressao regular para retornar todas letras minusculas
console.log(umaString.search(/[a-z]/g)) // retorna o index do que estou procurando, neste caso retorna 0, pois a expressao regular está procurando as letras minusculas, é muito semelhante ao indexOf, mas aceita expressoes regulares

console.log(umaString.replace('um', 'Outra')) // troca a palavra um por Outra

//           01234567   
umaString = "o rato roeu a roupa do rei de roma"
console.log(umaString.replace('r', '#')) // troca apenas a PRIMEIRA letra r que encontrar por #

// como substituir todas as letras r então ? Basta usar uma expressao regular:
console.log(umaString.replace(/r/g, '#')) // troca todas letras r que encontrar por #

console.log(umaString.length) // >> 34, retorna o tamanho da string

console.log(umaString.slice(2,6)) // >> rato, pois começa no 2 e vai até o 6, mas nao pega a letra do 6
console.log(umaString.split(' ')) // separa cada palavra pelo espaço e coloca em um array, ['o','rato','roeu','a'...]
console.log(umaString.split(' ', 2)) // mesmo que o de cima, mas limita o tamanho maximo que vai acontecer, o resultado seria: ['o', 'rato']

console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())


// exercicios

const nome = prompt('Digite seu nome completo:');
document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra A no seu nome? ${nome.indexOf('a')}<br />`;
document.body.innerHTML += `Qual o último índice da letra A no seu nome? ${nome.lastIndexOf('a') }<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(nome.length - 3, nome.length)}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase() }<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br />`;