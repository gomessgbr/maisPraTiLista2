const prompt = require('prompt-sync')();

function showEmployee(){
 let employee = {
    nome : '',
    cargo : '',
    salario : 0.0
  }
  getEmplyeeInfos(employee);

  return employee;
}

function getEmplyeeInfos(employee){
  employee.nome = prompt("Digite o nome: ");
  employee.cargo = prompt("Digite o cargo: ");
  employee.salario = parseFloat(prompt("Digite o salário: "));
}

console.log(showEmployee());