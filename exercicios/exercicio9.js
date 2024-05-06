const prompt = require('prompt-sync')();

let flag = true;
function sumGenderSalary(){
  let maleSalary = 0;
  let femaleSalary = 0;

  while(flag){
    let salary = parseFloat(prompt('Qual o seu salário? ' ));
    if(isNaN(salary)){
      flag = false;
      return `Valor invalido`
    }
    let gender = prompt('Qual o seu gênero ? M-masculino F-feminino? ').toLowerCase();
    if(gender === 'm'){
      maleSalary+= salary;
    }else if(gender === 'f'){
      femaleSalary += salary;
    }else{
      flag = false;
      return `Valor invalido`
    }

    continueOrNot(flag);

  }

  return `Salario pago aos homens = ${maleSalary} \nSalario pago as mulheres = ${femaleSalary}`

}


function continueOrNot(){
  let decision = prompt('Deseja continuar ? s-sim n-não? ').toLowerCase();

  if(decision === 'n'){
    flag = false;
  }
}

console.log(sumGenderSalary());
