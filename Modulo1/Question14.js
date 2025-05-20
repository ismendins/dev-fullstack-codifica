// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

const prompt = require("prompt-sync")();
const number = prompt("Forneça um número: ");

const result = calculateFactorial(number);
console.log(`O fatorial de ${number} é ${result}.`);
