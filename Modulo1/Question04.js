// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")();

const fuelType = prompt("Informe o tipo de combustível ou digite 'voltar' para voltar: ");

switch(fuelType){
    case "Gasolina":
        console.log("Abastecendo o carro com gasolina.");
        break;
    case "Diesel":
        console.log("Abastecendo o carro com diesel.");
        break;
    case "Alcool":
        console.log("Abastecendo o carro com álcool.");
        break;
    case "Voltar":
        console.log("Voltando para o menu anterior.");
        break;
    default:
        console.log("Informe uma opção válida!");
}
