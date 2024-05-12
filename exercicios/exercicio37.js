let prompt = require('prompt-sync')();

function examResult(){
  let examResult = [];
  for(let i = 0; i < 20; i ++){
    let numbers = parseInt(prompt(`Escreva a resposta da ${i+1}° questão : `));
    examResult.push(numbers);
  }
  return examResult;
}

function studantsExam(){
  let students = [];
    for (let i = 0; i < 50; i++) {
        let nome = prompt(`Escreva o nome do aluno: `);
        let answers = [];
        for (let j = 0; j < 20; j++) {
            let answer = prompt(`Escreva a ${j+1}° resposta do aluno ${nome} :`);
            answers.push(answer);
        }
        students.push({ name: nome, result: answers });
    }
    return students;
}


function compareExamResults(result, studentsResult){
  for (let i = 0; i < studentsResult.length; i++) {
    let sum = 0;
    for (let j = 0; j < 20; j++) {
        if (studentsResult[i].result[j] === result[j]) {
            sum++;
        }
    }
    if (sum >= 12) {
        console.log(`${studentsResult[i].name} acertou ${sum} APROVADO!`);
    } else {
        console.log(`${studentsResult[i].name}  acertou ${sum} REPROVADO!`);
    }
}
}

let examResult = examResult();
let studantsExam = studantsExam();

compareExamResults(examResult,studantsExam);