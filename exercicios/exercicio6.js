const prompt = require(`prompt-sync`)();

function getRandomNumber(){
  return Math.floor(Math.random() * 5) + 1;
}

let guess = parseInt(prompt("Qual foi o valor sorteado? "));

function randomGame(guess){
  const randomNumber = getRandomNumber();

  if(guess !== randomNumber){
    return `O número sorteado foi : ${randomNumber} \nVocê errou!`;
  }
  else{
    return `O número sorteado foi : ${randomNumber} \nVocê acertou!`;
  }
}

console.log(randomGame(guess));