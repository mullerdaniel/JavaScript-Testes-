let nome = "Daniel";
let idade = 18;

function verificadorIdade(idade) {
    if (idade >= 16){
        console.log("Você tem idade para votar!");

    }else {
        console.log("Você não tem idade para votar!");
    }
}


console.log("\nNome: "+ nome + "\nIdade: "+ idade + "\n");
verificadorIdade(idade);