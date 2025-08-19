const prompt = require('prompt-sync')();

let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));
let operacao = prompt("\nSelecione a operação:  [+, -, *, /]");

function calculadora(valor1, valor2, operacao) {
    let resultado;

    if (operacao === "+") {
        resultado = valor1 + valor2;

    } else if (operacao === "-") {
        resultado = valor1 - valor2;

    } else if (operacao === "*") {
        resultado = valor1 * valor2;

    } else if (operacao === "/") {
        if (valor2 === 0) {
            resultado = "\nNão é possível dividir por zero!";
        } else {
            resultado = valor1 / valor2;
        }
    } else {
        resultado = "Operação inválida!";
    }

    return resultado; 
}

let resultado = calculadora(valor1, valor2, operacao);
console.log("\nResultado: " + resultado);
