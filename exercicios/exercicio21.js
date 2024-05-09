const prompt = require('prompt-sync')();


function showWeightFit(){
  let height = parseFloat(prompt('Escreva sua altura: '));
  if(isNaN(height)){
    console.log("Altura é inválida, escreva novamente");
  }
  let gender = prompt('Escreva seu sexo M-Masculino F-Feminino: ').toLowerCase();
  if(gender !== 'm' && gender !== 'f'){
    console.log('Sexo incorreto, escreva novamente');
  }

  let weightFit = gender === 'm' ? 72.7 * height - 58 : 62.1 * height - 44.7;

  return `Seu peso ideal é ${weightFit.toFixed(2)}kg`;
}




console.log(showWeightFit());
