const prompt = require('prompt-sync')();

function arithmeticProgression(){
  let sum = 0;
  let terms = [];

  let firstTerm = parseInt(prompt('Escreva o primeiro termo da progressão aritmética: '));
  let ratio = parseInt(prompt('Escreva a razao da progressão aritmética: '));
  for(let i = 0; i < 10; i++){
    let term = firstTerm + i * ratio;
    terms.push(term);
    sum += term;
  }
  for(let term of terms){
    console.log(`Elementos da PA: ${term}`)
  }
  return `Soma = ${sum}`;
}

console.log(arithmeticProgression());