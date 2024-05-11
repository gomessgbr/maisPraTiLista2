const prompt = require('prompt-sync')();

function makeMatrixEx31(){
  let number = parseInt(prompt("Escreva um número: "));
  let matrixV = [];
  let matrixX = [];
  let countSame = 0;

  for(let i = 0; i < 30; i++){
    matrixV[i] = [];
    for(let j = 0; j < 30; j++){
      matrixV[i][j] = Math.floor(Math.random() * 10 );
      if(matrixV[i][j] === number){
        countSame+=1;
      }
      else {
        matrixX.push(matrixV[i][j]);
      }

    }

  }

  console.log(`A quantidade de valores da matriz igual ao valor de digitado ${countSame}`);
  showMatrixEx31(matrixV);
  console.log(`Matrix com todos os valores diferentes do digitado = `);
  showMatrixEx31(matrixX);
}

function showMatrixEx31(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let row = "";
    for (let j = 0; j < matrix[i].length; j++) {
      row += matrix[i][j] + " ";
    }
    console.log(row);
  }
}


makeMatrixEx31();
