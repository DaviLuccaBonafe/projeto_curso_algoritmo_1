/*
//Secao de declaracao de variaveis
   nome: caractere
   numero: real
   
Inicio
// Secao de Comandos, procedimento, funcoes, operadores, etc... 
   escreval("digite seu nome")
   leia(nome)
   escreval("digite seu numero")
   leia(numero)
   escreval(nome, " : " , numero)
*/
var nome, numero;

nome = prompt("digite o nome:")
numero = prompt("digite o numero:")

document.getElementById("paragrafo").innerText = nome + " : " + numero