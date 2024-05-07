const prompt = require('prompt-sync')();

function showNames(){
  let arr = [];

  for(let i = 0; i < 7; i++){
    let name = prompt("Informe o nome? ");
    arr.push(name);
  }

  for(let j = 6; j >= 0 ; j--){
    console.log(arr[j]);
  }
}

showNames();