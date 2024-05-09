const prompt = require('prompt-sync')();

function readHabitants() {
  let sumPayments = 0;
  let sumChildren = 0;
  let count = 0;
  let paymentsUpTo350 = 0;
  let maxPayment = 0;

  while (true) {
    let payment = parseFloat(prompt("Digite o salário (ou '0' para encerrar): "));
    if (payment === 0) {
      break;
    }
    if (isNaN(payment) || payment < 0) {
      console.log("Salário inválido. Digite novamente.");
      continue;
    }

    if (payment <= 350) {
      paymentsUpTo350++;
    }

    if (payment > maxPayment) {
      maxPayment = payment;
    }

    let children = parseInt(prompt("Digite o número de filhos: "));
    if (isNaN(children) || children < 0) {
      console.log("Número de filhos inválido. Digite novamente.");
      continue;
    }

    sumPayments += payment;
    sumChildren += children;
    count++;
  }

  if (count === 0) {
    console.log("Nenhum dado foi inserido.");
    return;
  }

  let averagePayment = sumPayments / count;
  let averageChildren = sumChildren / count;
  let percentageUpTo350 = (paymentsUpTo350 / count) * 100;

  console.log("____________________________________________")

  console.log(`Média de salário da população: R$${averagePayment.toFixed(2)}`);
  console.log(`Média do número de filhos: ${averageChildren.toFixed(2)}`);
  console.log(`Maior salário: R$ ${maxPayment.toFixed(2)}`);
  console.log(`Percentual de pessoas com salário até R$ 350,00: ${percentageUpTo350.toFixed(2)}%`);
}

readHabitants();
