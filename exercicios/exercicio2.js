const prompt = require('prompt-sync')();
let vel = parseInt(prompt('Qual a velocidade do carro ? '));
let limitVel =  vel > 80 ?  vel - 80  : 80;
console.log(limitVel === 80 ? "Dentro do limite de velocidade":`Veiculo multado em R$ ${limitVel * 5}`);
