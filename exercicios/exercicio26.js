function makeMatrixEx24() {
  let matrix = [];
  for (let i = 0; i < 3; i++) {
    matrix[i] = [];
    for (let j = 0; j < 5; j++) {
      matrix[i][j] = Math.floor(Math.random() * 10);
    }
  }

  return matrix;
}

function multiplyMatrices(matrixA , matrixB){
  let matrixP = [];
  if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
    console.log('As matrizes precisam ter as mesmas dimensões para a multiplicação.');
    return matrixP;
  }
  for (let i = 0; i < matrixA.length; i++) {
    matrixP[i] = [];
    for (let j = 0; j < matrixA[i].length; j++) {
      matrixP[i][j] = matrixA[i][j] * matrixB[i][j];
    }
  }

  return matrixP;

}

let matrixA = makeMatrixEx24();
let matrixB = makeMatrixEx24();
let productMatrix = multiplyMatrices(matrixA, matrixB);
console.log(productMatrix);