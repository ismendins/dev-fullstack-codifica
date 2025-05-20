// Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

function calculateAlumnFinalGrade(grade){
    const minimalScoreForApproval = 6;
    const minimalScoretoRetakeClass = 5;

    if (grade < minimalScoretoRetakeClass){
        console.log("Reprovado!");
    }
    else if (minimalScoretoRetakeClass <= grade && grade < minimalScoreForApproval)  {
        console.log("Recuperação!");
    }
    else if (grade >= minimalScoreForApproval){
        console.log("Aprovado!");
    }
}

const prompt = require("prompt-sync")();

const grade = prompt("Informe a nota do aluno: ");

calculateAlumnFinalGrade(grade);
