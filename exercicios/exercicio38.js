let prompt = require('prompt-sync')();

function makeVector(){
  let vector = [];

  for(let i = 0; i < 6; i++ ){
    let values = parseInt(prompt(`Escreva o valor da ${i + 1}° do vetor: `));
    if(isNaN(values)){
      console.log('Valor inválido!');
      return;
    }

    vector.push(values);
  }

  return vector;

}

function menuOptions(){
  let vector = makeVector();
  let operation = parseInt(prompt("Escolha a operação (1-Soma, 2-Multiplicação, 3-Divisão, 4-Ordenação Crescente, 5-Mostrar o vetor): "));

switch (operation) {
    case 1:
        console.log("Resultado da soma: ", sumVector(vector));
        break;
    case 2:
        console.log("Produto da multiplicação: ", multiplyVector(vector));
        break;
    case 3:
        console.log("Resultado da divisão: ", divisionVector(vector));
        break;
    case 4:
        console.log("Sorted elements:", sortVector(vector));
        break;
    case 5:
        showVector(vector);
        break;
    default:
        return;
}

}

function sumVector(vector){
  let sum = 0;
    for (let i = 0; i < vector.length; i++) {
        sum += vector[i];
    }
    return sum;
}

function multiplyVector(vector){
  let product = 1;
    for (let i = 0; i < vector.length; i++) {
        product *= vector[i];
    }
    return product;
}


function divisionVector(vector){
  let sum = sumOfElements(array);
    return sum / array.length;
}


function sortVector(vector){
  let swapped;
  do {
      swapped = false;
      for (let i = 0; i < vector.length - 1; i++) {
          if (vector[i] > vector[i + 1]) {
              let pivot = vector[i];
              vector[i] = vector[i + 1];
              vector[i + 1] = pivot;
              swapped = true;
          }
      }
  } while (swapped);
  return vector;
}

function showVector(vector) {
  console.log(vector);
}




menuOptions();