function makeMatrix() {
  let matrix = [];

  for (let i = 0; i < 7; i++) {
    matrix[i] = [];
    for (let j = 0; j < 7; j++) {
      matrix[i][j] = i === j ? 1 : null;
    }
  }

  return showMatrix(matrix);
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

makeMatrix();
