// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const stopCondition = 0;
let count = 0;
let sumOfNumbers = 0;
const prompt = require("prompt-sync")();

while (true) {
    const input = prompt("Forneça um número: ");
    const number = parseFloat(input);
    
    if (number === stopCondition) break;

    if (isNaN(number)) {
        console.log("Valor inválido!");
        continue;
    }
    sumOfNumbers += number;
    count++;
}

function calculateMeanOfNumbers(sumOfNumbers, count){
    return sumOfNumbers / count;
}

const meanOfNumbers = calculateMeanOfNumbers(sumOfNumbers, count);
console.log(`A média dos números é de: ${meanOfNumbers}`);
