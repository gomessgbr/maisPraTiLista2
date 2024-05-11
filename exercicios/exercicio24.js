function makeMatrixEx24() {
  let matrix = [];
  for (let i = 0; i < 6; i++) {
    matrix[i] = [];
    for (let j = 0; j < 8; j++) {
      matrix[i][j] = Math.floor(Math.random() * 20) - 10; 
    }
  }
  return matrix;
}

function negativeCounter(matrix) {
  let vetorC = [];
  for (let i = 0; i < matrix.length; i++) {
    let count = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < 0) {
        count++;
      }
    }
    vetorC.push(count);
  }
  return vetorC;
}

function showMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let row = "";
    for (let j = 0; j < matrix[i].length; j++) {
      row += matrix[i][j] + " ";
    }
    console.log(row);
  }
}

let matrixM = makeMatrixEx24();
console.log("Matriz M:");
showMatrix(matrixM);

let vetorC = negativeCounter(matrixM);
console.log("\nVetor C:");
for (let i = 0; i < vetorC.length; i++) {
  console.log(vetorC[i]);
}
