const prompt = require('prompt-sync')();
let flag = true;
function doWhileSum(){
  let sum = 0;
  let count = 0;
  let minNum = 0;
  let pair = 0;

  do {
    let number = parseInt(prompt('Digite um valor: '));
    sum += number;
    count++;

    if(count === 1 || number < minNum){
      minNum = number;
    }

    if(number % 2 === 0){
      pair ++;
    }
    continueOrNot();

  } while(flag);

  return `Soma = ${sum}\nMenor valor = ${minNum}\nMédia = ${sum / count}\nQuantidade de valores pares = ${pair}`;

}
function continueOrNot(){
  let decision = prompt('Deseja continuar ? s-sim n-não? ').toLowerCase();
    if(decision === 'n'){
      flag = false;
      return
    } else if(decision !== 's'){
      flag = false;
      return`Opção inválida`
    }
}

console.log(doWhileSum());