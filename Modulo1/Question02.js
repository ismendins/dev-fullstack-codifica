// Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

const beginningChildhood = 0;
const beginningTeenagehood = 12; 
const beginningAdulthood = 18;
const beginningElderhood = 60;

//  Calculando as idades e os períodos de vida
function calculateChildhoodandTeenageHood(age){
    if (beginningChildhood <= age && age < beginningTeenagehood){
        console.log("A pessoa informada é uma criança!");
    }
    else if (beginningTeenagehood <= age && age < beginningAdulthood){
        console.log("A pessoa informada é uma adolescente!");
    }
}

function calculateAdulthoodAndElderhood(age){
    if (beginningAdulthood <= age && age < beginningElderhood){
        console.log("A pessoa informada é uma adulta!");
    }
    else{
        console.log("A pessoa informada é uma idosa!");
    }
}

// Função para exibir os resultados
function calculateGeneration(age){

    if (age < beginningAdulthood){
        calculateChildhoodandTeenageHood(age);
    }
    
    if (age >= beginningAdulthood){
        calculateAdulthoodAndElderhood(age);
    }
}

const prompt = require("prompt-sync")();

// Lendo input do usuário
const age = prompt("Informe a idade da pessoa: ");

calculateGeneration(age);
