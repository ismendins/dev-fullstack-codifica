// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

function writeNumber(number){
    const maxNumber = 10;
    let multiplicationResult = 0;
    for (let i = 1; i <= maxNumber; i++){
        multiplicationResult = number * i;
        console.log(`${number} x ${i} = ${multiplicationResult}`);
    } 
}

const prompt = require("prompt-sync")();
const number = prompt("Forneça um número: ");
writeNumber(number);
