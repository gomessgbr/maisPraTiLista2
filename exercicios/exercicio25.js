const prompt = require('prompt-sync')();


function makeMatrixEx25() {
  let matrix = [];

  for (let i = 0; i < 15; i++) {
    matrix[i] = [];
    for (let j = 0; j < 20; j++) {
      let number = parseFloat(prompt(`Escreva um número [${i+1};${j+1}]: `));;
      if(isNaN(number)){
        break;
      }

      matrix[i][j] = number;
    }
  }

  return showSumMatrix(matrix);
}

function showSumMatrix(matrix) {
  for (let j = 0; j < 20; j++) {
    let sumColumn = 0;
    for (let i = 0; i < 15; i++) {
      sumColumn += matrix[i][j];
    }
    console.log(`Soma da coluna ${j + 1}: ${sumColumn}`);
  }
}

makeMatrixEx25();