function makeMatrixEx24(){
  let matrixM = [];
  let vectorSL = [0,0,0,0,0];
  let vectorSC = [0,0,0,0,0];
  for(let i = 0; i < 5; i++){
    matrixM[i] = [];
    for(let j = 0; j < 5; j++){
      matrixM[i][j] = Math.floor(Math.random() * 10);
      vectorSC[j] += matrixM[i][j];
      vectorSL[i]+= matrixM[i][j];
    }
  }

  showMatrixEx30(matrixM);
  console.log('Vetor SL(5):', vectorSL);
  console.log('Vetor SC(5):', vectorSC);
}


function showMatrixEx30(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let row = "";
    for (let j = 0; j < matrix[i].length; j++) {
      row += matrix[i][j] + " ";
    }
    console.log(row);
  }
}

makeMatrixEx24();