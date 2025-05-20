/* eslint-disable prefer-const */
// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

let numbers = [];
const maxNumbers = 5; 
const prompt = require("prompt-sync")();

for (let i = 0; i < maxNumbers; i++){
    const number = parseFloat(prompt("Forneça um número: "));
    numbers.push(number);
}

function sumInAnArray(numbers){
    let sumOfNumbers = 0;
    for (let element of numbers) {
        sumOfNumbers += element;
    }
    return sumOfNumbers;
}

console.log(`Soma dos números é ${sumInAnArray(numbers)}`);
