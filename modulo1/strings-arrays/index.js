// Exercício 1
/*let array
console.log('a. ', array) // lista de elementos de qualquer coisa que quer juntar 

array = null
console.log('b. ', array) // null (redefinir um valor)  

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // quantidade de caracteres e espaços

let i = 0
console.log('d. ', array[i]) // d" [3]
// indice- 0,1,2...

array[i+1] = 19
console.log('e. ', array) // n 19 no lugar (4) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // [3, 19, 5, 6, 7, 8, 9] lista 6 numeros primeiros
 

// Exercício 2 
/*const frase = prompt ("Subi num ônibus em Marrocos")
console.log (frase.toUpperCase()) // converte todos os caracteres para as letras Maiúsculas
console.log( frase.("A", "I")) // converte na frase a vogal "A" por "I"
console.log ( frase. length) // quantidade de caracteres e espaços*/

// Exercícios de Escrita de código

let emailDoUsuario = prompt ('Digite o seu e-mail') 
let nomeDoUsuario = prompt ('qual é o seu nome')
let Saudações = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso ${nomeDoUsuario} Seja bem vinda(o)!` 
console.log ( Saudações)

// Exercício 2

let comidasPreferidas = ["macarrão", "lasanha", "batata", "feijoada", "purê"]
console.log  (comidasPreferidas)


console.log  ("Essas são as minhas comidas preferidas")
console.log  (comidasPreferidas[0])
console.log  (comidasPreferidas[1])
console.log  (comidasPreferidas[2])
console.log  (comidasPreferidas[3])
console.log  (comidasPreferidas[4])

let comidaDoUsuario = prompt('Qual é a sua comida preferida?')
console.log(comidaDoUsuario) 
comidasPreferidas.splice(1, 1, comidaDoUsuario) 
console.log(comidasPreferidas) 


// Exercício 3

const listaDeTarefas = []
const primeiraTarefa = prompt ("Primeira tarefa do dia")
listaDeTarefas.push(primeiraTarefa)

const segundaTarefa = prompt ("Segunda tarefa do dia")
listaDeTarefas.push(segundaTarefa)

const terceiraTarefa = prompt ("Terceira tarefa do dia") 
listaDeTarefas.push(terceiraTarefa)

console.log(listaDeTarefas) 

const escolhaTarefa = Number(prompt("Digite o numero de uma tarefa do dia de 1 a 3"))


let listaIndice = listaDeTarefas.splice(escolhaTarefa,[1, -1 ])

console.log(listaIndice)




