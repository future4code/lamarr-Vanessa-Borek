// Exercícios de intepretação de código

// 1
/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

//a 
// aparecerá na parte do elenco o indice pedido o autor - "Matheus Nachtergaele".
// aparecerá  e na parte do elenco o legth -1, o nome após o indice 1 e menos 1 vai retornar a Posição -"Virginia Cavendish"
// retorna no objeto transmissoesHoje, aparecerá o indice do arrays - {canal: "Globo, horário: "14h"}

//2

//a
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) // retornará  nome:"Juca", idade:3, raça: "SRD"
console.log(gato)     // retornará   nome: "Juba", idade:3, raça: "SRD"
console.log(tartaruga) // retornará   nome: "jubo", idade:3, raça: "SRD"
 // ... adiciona outras variaveis, dentro do objeto cachorro */ 



 // EXERCÍCIO 3



//Exercícios de escrita de código

 const pessoa1 = {
      nome: "Vanessa",
      apelidos:["Van", "Vane", "Nessa"], 

    todosOsApelidos:() => {
let frase =(`Eu sou ${pessoa1.nome},mas pode me chamar de: ${pessoa1.apelidos}`) 
return frase
    }
}
console.log(pessoa1.todosOsApelidos(pessoa1))

const novosApelidos ={...pessoa1,apelidos:[ "Vá", "Iessa", "Banessa"]
}

console.log(`Eu sou ${pessoa1.nome}, mas pode me chamar de: ${pessoa1.apelidos}`)

//3

const pessoaUm = {
    nome:"Patricia",
    idade: 44,
    profissão: "Atleta", 
}

const pessoaDois = {
    nome:"Luiz",
    idade: 57,
    profissão: "Vistoriador" 

}    
  

function pessoasInfo(obj) {
    
    
}    






