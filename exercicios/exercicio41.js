function makePerson(){
  let pessoa = {
    nome: 'Gabriel',
    idade : 26
  }
  console.log(`Idade = ${pessoa.idade}`);

  pessoa['email'] = 'gomesgbr@icloud.com';

  // console.log(pessoa);
}

makePerson();