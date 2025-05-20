/* eslint-disable no-magic-numbers */
// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

function writeNumber(number){
    for (let i = 1; i < 11; i++){
        console.log(number);
    } 
}


const prompt = require("prompt-sync")();
const number = prompt("Forneça um número: ");
writeNumber(number);
