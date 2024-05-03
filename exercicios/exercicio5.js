const prompt = require(`prompt-sync`)();

let jogador1 = parseInt(prompt('1-Pedra 2-Papel 3-Tesoura Jogador 1 Insira a opção: '));
let jogador2 = parseInt(prompt('1-Pedra 2-Papel 3-Tesoura Jogador 2 Insira a opção: '));

console.log(joKenPo(jogador1, jogador2));

function joKenPo(jogador1, jogador2) {
  if (jogador1 === jogador2) {
    return 'Empate!';
  }
  if ((jogador1 === 1 && jogador2 === 3) || (jogador1 === 2 && jogador2 === 1) || (jogador1 === 3 && jogador2 === 2)) {
    return 'Jogador 1 Ganhou!';
  } else {
    return 'Jogador 2 Ganhou!';
  }
}
