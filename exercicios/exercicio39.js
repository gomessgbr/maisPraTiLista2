function makeVectorEx39(){
  let vectorA = [];
  let vectorB = [];
  for(let i = 0; i < 100; i++){
    vectorA.push(Math.floor(Math.random() * 21) - 10);
  }

  for(let j = 0; j < vectorA.length ; j++){
    if(vectorA[j] >= 0){
      vectorB.push(vectorA[j]);
    }
  }

  return vectorB;
}

console.log(makeVectorEx39());