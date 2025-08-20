const prompt = require('prompt-sync')();

valorTemperatura = prompt("Digite a temperatura em ºC: ");


temperaturaConvertida = (valorTemperatura * 9/5) + 32;

console.log("\n\nTemperatura em fahrenheit: "+ temperaturaConvertida);