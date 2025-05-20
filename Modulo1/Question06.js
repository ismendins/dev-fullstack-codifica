/* Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */

const prompt = require("prompt-sync")();

function readSides(side) {
    while (true) {
        const value = parseFloat(prompt(`Digite o valor do lado ${side}: `));
        if (!isNaN(value) && value > 0) {
            return value;
        }
        console.log("Valor inválido! Digite um número positivo.");
    }
}

console.log("Digite os três lados do triângulo: ");
const sideA = readSides("A");
const sideB = readSides("B");
const sideC = readSides("C");

if (sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB) {
    if (sideA === sideB && sideB === sideC) {
        console.log("Triângulo Equilátero");
    } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo!");
}

