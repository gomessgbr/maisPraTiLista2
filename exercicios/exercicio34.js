function makeMatrix() {
  let matrix = [];
  for (let i = 0; i < 50; i++) {
      matrix[i] = [];
      for (let j = 0; j < 50; j++) {
          matrix[i][j] = Math.random() * 10;
      }
  }
  return matrix;
}

function multiplyDiagonal(matrix) {
  for (let i = 0; i < 50; i++) {
      let diagonal = matrix[i][i];
      for (let j = 0; j < 50; j++) {
          matrix[i][j] *= diagonal;
      }
  }
  return matrix;
}

function showMatrix(matrix) {
  for (let i = 0; i < 50; i++) {
      let row = "";
      for (let j = 0; j < 50; j++) {
          row += matrix[i][j].toFixed(2) + "\t";
      }
      console.log(row);
  }
}

let matriz = makeMatrix();
console.log("Matriz :");
showMatrix(matriz);

let matrizResultado = multiplyDiagonal(matriz);
console.log("\nMatriz Produto:");
showMatrix(matrizResultado);
