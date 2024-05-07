const prompt = require('prompt-sync')();

function showNumbers(){
  let arr = [];

  for(let i = 0; i < 10; i++ ){
    let numbers = parseInt(prompt(`Escreva o ${i+1} número: `));
    if(isNaN(numbers)){
      `Número inválido!`;
      return;
    }
    arr.push(numbers);

  }

  arr.forEach((elemento, index) => {
    if(elemento % 2 === 0){
      console.log(`número : ${elemento} posição: ${index} `);
    }
  })
}

showNumbers();
