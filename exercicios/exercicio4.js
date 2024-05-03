const prompt = require(`prompt-sync`)();

let segA = parseInt(prompt('Insira o valor do primeiro segmento de reta : '));
let segB = parseInt(prompt('Insira o valor do segundo segmento de reta : '));
let segC = parseInt(prompt('Insira o valor do terceiro segmento de reta: '));

if((segA + segB > segC) && (segB + segC > segA) && (segA + segC > segB)){
  console.log('Esses segmentos de reta formam um triângulo!');
}else{
  console.log("Esse segmentos de reta não formam um triângulo!");
}

