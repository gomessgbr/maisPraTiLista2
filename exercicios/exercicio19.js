const prompt = require('prompt-sync')();

function getTime(){
  let time;
  let isValid = false;

  while(!isValid){
    time = prompt(`Digite o horário no formato HH:MM:SS: `);
    isValid = validationTimer(time);
    if(!isValid){
      console.log('Horário digitado é inválido, digite novamente: ');
    }
  }

  return time;
}

function validationTimer(time){
  let splittedTime = time.split(":");
  if (splittedTime.length !== 3) {
    return false;
  }

  let hours = parseInt(splittedTime[0]);
  let minutes = parseInt(splittedTime[1]);
  let seconds = parseInt(splittedTime[2]);

  if (hours < 0 || hours > 23 || isNaN(hours)) {
    return false;
  }

  if (minutes < 0 || minutes > 59 || isNaN(minutes)) {
    return false;
  }

  if (seconds < 0 || seconds > 59 || isNaN(seconds)) {
    return false;
  }

  return true;
}

function showTime(){
  for (let i = 0; i < 5; i++) {
    let timer = getTime();
    console.log("Horário " + (i + 1) + ": " + timer);
  }
}


showTime();