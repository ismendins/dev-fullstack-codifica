/* eslint-disable complexity */
// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

function calculateBMI(weight, height) {
    return weight / (height * height);
}

function calculateCategory(bmi) {
    if (bmi < 18.5) {
        return "Baixo peso";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Peso normal";
    } else if (bmi >= 25 && bmi < 30) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

const prompt = require("prompt-sync")();

const weight = parseFloat(prompt("Peso (kg): "));
const height = parseFloat(prompt("Altura (m): "));

const bmi = calculateBMI(weight, height);
const category = calculateCategory(bmi);

console.log(`IMC: ${bmi.toFixed(2)}`);
console.log(`Categoria: ${category}`);
