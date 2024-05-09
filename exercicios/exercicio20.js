const prompt = require('prompt-sync')();


function paymentSalary(){
  let salary = [];
  let employees = {
    matricula : '',
    nome: '',
    bruto: '',
    INSS: '',
    liquido: ''
  }


  for(let i = 0; i < 5; i++){

    let register = parseInt(prompt(`Escreva a matrícula do ${i + 1} funcionário: `));
    let name = prompt(`Escreva o nome do ${i + 1} funcionário: `);
    let salarioBruto = parseFloat(prompt(`Escreva o salário bruto do ${i + 1} funcionário: `));
  
    let inss = salarioBruto *  (12/100);
    let salarioLiquido = salarioBruto - inss;

    employees.matricula = register;
    employees.nome = name;
    employees.bruto = salarioBruto;
    employees.INSS = inss;
    employees.liquido = salarioLiquido;

    salary.push(employees);

  }

  return showSalary(salary);

}

function showSalary(employeesSalary){
  employeesSalary.forEach((employee) => {
    console.log('_____________________');
    console.log(`
      \nMatricula: ${employee.matricula}
      \nNome: ${employee.nome}
      \nSalário bruto: ${employee.bruto}
      \nDeduçãoINSS: ${employee.INSS}
      \nSalário líquido: ${employee.liquido}
    `)
    console.log('_____________________');
  })
}

paymentSalary();