function makeMatrix(){
  let matrix = [];
  let sumAbove= 0;
  let sumBelow = 0;
  for(let i = 0; i < 10; i++){
    matrix[i] = [];
    for(let j = 0; j < 10; j++){
      matrix[i][j] = Math.floor(Math.random() * 10);
      if (i < j) {
        sumAbove += matrix[i][j];
      } else if (i > j) {
        sumBelow += matrix[i][j];
      }
    }
  }

  console.log(`Soma dos elementos acima da diagonal principal ${sumAbove}`);
  console.log(`Soma dos elementos aabaixo da diagonal principal ${sumBelow} `)
}