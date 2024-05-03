const prompt = require('prompt-sync')();
let dist = parseInt(prompt('Qual distância deseja percorrer em KM ? '));
let value = dist > 200 ? dist * 0.45 : dist * 0.50;
console.log(`Sua passagem será no valor de R$ ${value}`);
