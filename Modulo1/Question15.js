// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

function fibonacci() {
    let a = 0; 
    let b = 1;
    const numbersMax = 10;
    console.log("Os 10 primeiros números da sequência de Fibonacci: ");
    
    for (let i = 0; i < numbersMax; i++) {
        console.log(a);
        [a, b] = [b, a + b];
    }
}

fibonacci();
