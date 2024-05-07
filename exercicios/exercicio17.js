const prompt = require(`prompt-sync`)();

function showAge(){
  let names = [];
  let ages = [];
  for(i = 0; i < 9 ; i++){
    let name = prompt(`Digite o nome? `);
    let age = parseInt(prompt(`Digite a idade ? `));
    names.push(name);
    ages.push(age);
  }

  for(let j = 0; j < 9 ; j++){
    if(ages[j] < 18){
      console.log(`nome: ${names[j]}, idade ${ages[j]}`);
    }
    
  }
}

console.log(showAge());