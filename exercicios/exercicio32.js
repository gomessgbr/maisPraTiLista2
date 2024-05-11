function makeMatrixEx32(){
  let matrixM = [];
  let matrixModified = [];


  for(let i = 0; i < 12; i++){
    matrixM[i] = [];
    for(let j = 0; j < 13; j++){
      matrixM[i][j] = Math.floor(Math.random() * 10);
    }
  }


  for(let i = 0; i < 12; i++){
    let maxAbsValue = findMaxValue(matrixM[i]);
    matrixModified[i] = divideRowByValue(matrixM[i], maxAbsValue);
  }

  console.log("Matriz Original:");
  showMatrixEx32(matrixM);
  console.log("\nMatriz Modificada:");
  showMatrixEx32(matrixModified);
}

function findMaxValue(row){
  let maxAbsValue = row[0] < 0 ? -row[0] : row[0];
  for(let i = 1; i < row.length; i++){
    let absValue = row[i] < 0 ? -row[i] : row[i];
    if(absValue > maxAbsValue){
      maxAbsValue = absValue;
    }
  }
  return maxAbsValue;
}

function divideRowByValue(row, value){
  let newRow = [];
  for(let i = 0; i < row.length; i++){
    newRow[i] = (row[i] / value).toFixed(2);
  }
  return newRow;
}

function showMatrixEx32(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let row = "";
    for (let j = 0; j < matrix[i].length; j++) {
      row += matrix[i][j] + "\t";
    }
    console.log(row);
  }
}

makeMatrixEx32();
