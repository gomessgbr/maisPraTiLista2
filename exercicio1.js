const prompt = require('prompt-sync')();
let cigarretesPerDay = parseInt(prompt('Quanto cigarros fumados por dia ? '));
let yearsSmoked = parseInt(prompt('Fumante a quantos anos ? '));
let totalDaysSmoked = Math.floor(((10 * cigarretesPerDay)/1440) * yearsSmoked);
console.log(`${totalDaysSmoked} dias de vida perdidos fumando`);
