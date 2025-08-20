const prompt = require('prompt-sync')();


let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

console.log("\n===---> J O G O  -  D O  -  A D I V I N H A <---===");
console.log("\n=- Objetivo -=\n\n-> Digite numeros de 0 á 100.\n-> Seu objetivo é acertar o numero sorteado.\n-> O jogo te dará dicas de o numero que você colocou é maior ou menor!\n\nBoa Sorte!!!\n\n============================-----------------------------------============================");

let numeroEscolhido;


do {
    numeroEscolhido = parseInt(prompt("\n\nDigite um numeo de 0 á 100: "));

    if (numeroEscolhido == numeroAleatorio){
        console.log("\n\nParabéns você acertou o numero correto. | Numero correto: "+ numeroAleatorio);
    
    }else if (numeroEscolhido < numeroAleatorio){
        console.log("\nTente um numero maior!");
    
    }else if (numeroEscolhido > numeroAleatorio){
        console.log("\nTeste um numero menor!");

    }else if (numeroEscolhido < 0 || numeroEscolhido > 100){
        console.log("\nVocê digitou um numero menor que 0 ou maior que 100! | Tente Novamente.");
    }

}while (numeroEscolhido !== numeroAleatorio);
