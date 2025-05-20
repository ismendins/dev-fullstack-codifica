// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

function buyApples(quantity){
    const maxPrice = 0.30;
    const minPrice = 0.25;
    const discountQuantityLimit = 12;
    let totalSale = 0;

    if (quantity < 0){
        console.log("Informe um valor válido.");        
    }
    else if (discountQuantityLimit > quantity){
        totalSale = maxPrice * quantity;
        console.log(`O valor da compra é de R$ ${totalSale}`);
    }
    else{
        totalSale = minPrice * quantity;
        console.log(`O valor da compra é de R$ ${totalSale}`);
    }
}

const prompt = require("prompt-sync")();
const quantity = prompt("Informe a quantidade de maçãs: ");

buyApples(quantity);
