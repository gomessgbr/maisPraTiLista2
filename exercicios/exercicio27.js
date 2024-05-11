const prompt = require('prompt-sync')();

function makeMatrixEx27(){
  let valueA = parseInt(prompt("Escreva um valor: "));
  if(isNaN(valueA)){
    return 'Valor inválido';
  }
  let matrix = [];
  let result = [];
  for(let i = 0; i < 6 ; i++){
    matrix[i] = [];
    for(let j = 0; j < 6; j++){
      matrix[i][j] = Math.floor(Math.random() * 10);
      result.push(matrix[i][j] * valueA);
    }
  }

  return result;
}

console.log(makeMatrixEx27());