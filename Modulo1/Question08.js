// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

function writingMajorAndMinor(value1, value2){
    if (value1 > value2){
        console.log(`${value1}, ${value2}`);
    }
    if (value2 > value1){
        console.log(`${value2}, ${value1}`);
    }
}

const prompt = require("prompt-sync")();
const value1 = prompt("Forneça um número inteiro: ");
const value2 = prompt("Forneça um número inteiro e diferente do primeiro: ");

writingMajorAndMinor(value1, value2);
