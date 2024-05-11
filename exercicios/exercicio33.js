function makeMatrixEx33(){
  let matrix = [];
  for(let i = 0; i < 3 ; i++){
    matrix[i] = [];
    for(let j = 0; j < 3; j++){
      matrix[i][j] = Math.floor(Math.random() * 10);
    }
  }
  return matrix;
}

function average(matrix){
  let sum = 0;
  for(let i = 0; i < 3; i++){
    sum+= matrix[i][2-i];
  }
  return sum / 3;
}

function multiplyEx33(matrix){
  let avg = average(matrix);
  for (let i = 0; i < 3; i++) {
    matrix[i][i] *= avg;
  }
  return matrix;
}

let matriz = makeMatrixEx33();
console.log("Matriz Original:");
console.log(matriz);

let matrizResultado = multiplyEx33(matriz);
console.log("Matriz Produto:");
console.log(matrizResultado);
