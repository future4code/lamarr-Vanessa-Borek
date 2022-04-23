// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
   let alturaR = Number(prompt('digite a altura'))
   let larguraR = Number(prompt('digite a largura'))
   let areaRetangulo = alturaR * larguraR
   
   console.log(areaRetangulo);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let atual = Number(prompt('digite o ano atual'))
  let nascimento = Number(prompt('digite o ano de nascimento'))
  let idadeDoUsuario = atual - nascimento 
  console.log(idadeDoUsuario)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let pessoaPeso = Number(prompt('digite seu peso'))
  let pessoaAltura = Number(prompt('digite sua altura'))
  
  return pessoaImc = Number( imc = peso / (altura * altura))
  let calculaIMC = pessoaImc
  console.log(calculaIMC)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
 const nomeDoUsuario =prompt ('Qual seu nome?')

 const idadeDoUsuario = Number(prompt('digite sua idade'))

 const emailDoUsuario = prompt('Qual seu Email?')

  return`O meu nome é ${nomeDoUsuario} tenho ${idadeDoUsuario} anos; e o meu email é ${emailDoUsuario}`
 
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  
let corUm = prompt ("Digite sua cor favorita")
console.log(corUm [0])

let corDois = prompt(" Digite sua segunda cor favorita") 
console.log(corDois[1])

let corTres = prompt(" digite sua ultima cor favorita")
console.log(corTres[2])


let coresFavoritas = [corUm, corDois, corTres]  
 console.log(coresFavoritas) 
} 

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

  
} 



// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}