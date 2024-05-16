let prompt = require('prompt-sync')();


function readVector(){
  let vectorLoto = [];
  let amountBet = [];
  for(let i = 0; i < 5; i++){
    let inputNumbers = parseInt(prompt(`Escreva o ${i+1}° valor do gabarito da loteria: `));
    if(isNaN(inputNumbers)){
      console.log(`Valor não corresponde!`);
    }
    vectorLoto.push(inputNumbers);
  }
  for(let j = 0; j < 50; j++){
    let betNumbers = [];
    for(let k = 0; k < 5; k++){
      let inputNumbers = parseInt(prompt(`Escreva o ${k+1}° número da aposta ${j+1}: `));
      if(isNaN(inputNumbers)){
        console.log(`Valor não corresponde!`);
      }
      betNumbers.push(inputNumbers);
    }
    amountBet.push({id: j + 1, betNumbers: betNumbers});
  }
  compareResult(vectorLoto, amountBet);
}

function compareResult(result, bets){
  for(let i = 0; i < bets.length; i++){
    let correctNumbers = 0;
    for(let j = 0; j < result.length; j++){
      let winnerFound = false;
     for(let k = 0; k < bets[i].betNumbers.length; k++){
      if(result[j] === bets[i].betNumbers[k]){
        winnerFound = true;
        return
      }
     }
      if(winnerFound){
        correctNumbers ++;
      }
    }
    if(correctNumbers === 5){
      console.log(`Apostador número ${bets[i].id} foi o Ganhador!`)
      return someResults = 0;
    }
  }

}

readVector();


