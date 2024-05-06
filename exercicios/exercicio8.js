const prompt= require(`prompt-sync`)();
const POINTS_UP_TO_10H = 2;
const POINTS_BETWEEN_10_AND_20 = 5;
const POINTS_ABOVE_20 = 10;
const FOR_POINTS = 0.05;

let hoursForMonth = parseFloat(prompt("Quantas horas de atividade você teve este mês? "));


function sumPoints(){
  let total = 0;

    if (hoursForMonth <= 10) {
        total = hoursForMonth * POINTS_UP_TO_10H;
    } else if (hoursForMonth <= 20) {
        total = 10 * POINTS_UP_TO_10H + (hoursForMonth - 10) * POINTS_BETWEEN_10_AND_20;
    } else {
        total = 10 * POINTS_UP_TO_10H + 10 * POINTS_BETWEEN_10_AND_20 + (hoursForMonth - 20) * POINTS_ABOVE_20;
    }

    let earned = total * FOR_POINTS;
    return `Você obteve ${total} pontos e ganhou R$${earned.toFixed(2)}.`;
}

console.log(sumPoints());