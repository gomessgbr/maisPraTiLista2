function makeMatrix(){
  let matrixM = [];
  let sum4Row = 0;
  let sum2Column= 0;
  let sumMain = 0;
  let sumAll = 0;
  for(let i = 0 ; i < 5; i++){
    matrixM[i]=[];
    for(let j = 0; j < 5; j++){
      matrixM[i][j] = Math.floor(Math.random() * 10);
      if(i === 4){
        sum4Row += matrixM[i][j];
      }
      if(j === 2){
        sum2Column+=matrixM[i][j];
      }
      if(i === j){
        sumMain+=matrixM[i][j];
      }
      sumAll+=matrixM[i][j];
    }
  }
  
  console.log(`Soma da linha 4 da matriz M = ${sum4Row}`);
  console.log(`Soma da Coluna 2 da matriz M = ${sum2Column}`);
  console.log(`Soma da diagonal principal da matriz M = ${sumMain}`);
  console.log(`Soma de todos os elementos da matriz M = ${sumAll}`);
  console.log('MatrizM =');
  showMatrix(matrixM);
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