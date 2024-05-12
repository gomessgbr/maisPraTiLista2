let prompt = require('prompt-sync')();

function makeMatrixEx35(){

  let vectorEven = [];
  let vectorOdd =[];


  for(let i = 0; i < 30; i++){
    let value = Math.floor(Math.random() * 10);
    if(vectorEven.length === 5){
      console.log(`Vetor de pares: ${vectorEven}`);
      vectorEven = [];
    } else if(vectorOdd.length=== 5){
      console.log(`Vetor de ímpares: ${vectorOdd}`);
      vectorOdd = [];
    }

    if(value % 2 === 0){
      vectorEven.push(value);
    }else{
      vectorOdd.push(value);
    }
  }

  console.log(`Vetor de pares:  ${vectorEven}`);
  console.log(`Vetor de ímpares: ${vectorOdd}`);
}

makeMatrixEx35();