const prompt = require(`prompt-sync`)();
const COST_PER_DAY_POPULAR = 90;
const COST_PER_DAY_LUXO = 150;
const COST_UP_TO_100KM_POPULAR = 0.20;
const COST_UP_TO_100KM_LUXO= 0.30;
const COST_ABOVE_100KM_POPULAR = 0.10;
const COST_ABOVE_100KM_LUXO = 0.25;


function rentCar(){
  let category;
  while (!category) {
    category = carType();
  }
  let rentDays = parseInt(prompt('Quantos dias ? '));
  let distanceTraveled = parseFloat(prompt('Qual foi a KM percorrida ?'));
  let costKmTraveled = costForDistanceTraveled(category,distanceTraveled)
  rentCarCost(rentDays, category, costKmTraveled);

}

function carType(){
  let carType = prompt('Qual o tipo de carro ? ');

  if(!carType || (carType.toLowerCase() !== 'popular' && carType.toLowerCase() !== 'luxo') ){
    return;
  }

  return carType.toLowerCase();
}

function costForDistanceTraveled(category, distanceTraveled){
  if(category === 'popular'){
    if(distanceTraveled <= 100){
      return distanceTraveled * COST_UP_TO_100KM_POPULAR;
    }
    else{
      return distanceTraveled * COST_ABOVE_100KM_POPULAR;
    }
  }else if(category === 'luxo'){
    if(distanceTraveled <= 100){
      return distanceTraveled * COST_UP_TO_100KM_LUXO;
    }
    else{
      return distanceTraveled * COST_ABOVE_100KM_LUXO;
    }
  }
}

function rentCarCost(rentDays, category, distanceTraveled){
  if(category === 'popular'){
    return `O Valor do aluguel será de R$ ${((COST_PER_DAY_POPULAR * rentDays) + distanceTraveled).toFixed(2)}`;
  }
  else{
    return `O Valor do aluguel será de R$ ${((COST_PER_DAY_LUXO * rentDays) + distanceTraveled).toFixed(2)}`;
  }
}

console.log(rentCar());