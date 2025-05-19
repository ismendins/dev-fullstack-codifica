// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.
const prompt = require("prompt-sync")();

// Lendo input do usuário
const number = prompt("Informe um número inteiro: ");

// Função para avaliar se é par ou impar
function isEvenOrOdd (number){
    const divisor = 2;
    if (number % divisor == 0){
        console.log("É par!");
    }
    else {
        console.log("É impar!");
    }
}

// Chamando a função
isEvenOrOdd(number);
