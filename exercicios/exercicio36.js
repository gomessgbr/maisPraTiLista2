let prompt = require('prompt-sync')();

function lotteryResult(){
  let result = [];
  for(let i = 0; i < 13; i ++){
    let numbers = parseInt(prompt(`Escreva o ${i+1}° número do gabarito: `));
    if(isNaN(numbers)){
      console.log('Valor inválido!');
      return;
    }
    result.push(numbers);
  }
  return result;
}

function lotteryBettors(){
  let bettors = [];
  for(let i = 0; i < 10; i++){
    let bettor = {
      card: '',
      numbers: []
    };
    bettor.card = prompt(`Escreva o número do cartão do apostador ${i + 1}: `);
    for(let j = 0; j < 13; j++){
      let numbers = parseInt(prompt(`Escreva o ${j+1}° número apostado: `));
      if(isNaN(numbers)){
        console.log('Valor inválido!');
        return;
      }
      bettor.numbers.push(numbers);
    }
    bettors.push(bettor);
  }
  return bettors;
}

function compareLotteryResults(result, bettors){
  for(let i = 0; i < bettors.length; i++){
    let sum = 0;
    for(let j = 0; j < 13; j++){
      if(bettors[i].numbers[j] === result[j]){
        sum++;
      }
    }
    console.log(`Apostador ${bettors[i].card} acertou ${sum} números.`);
    if(sum === 13){
      console.log(`Parabéns, o apostador ${bettors[i].card} foi o GANHADOR!`);
    }
  }
}

let loteryResult = lotteryResult();
let bettors = lotteryBettors();

compareLotteryResults(loteryResult, bettors);
