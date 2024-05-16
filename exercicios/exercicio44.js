function makeRandomObjet(zicasObj){
 let countStringProps = 0;
 for(let key in zicasObj){
  if(typeof zicasObj[key] === 'string'){
    countStringProps ++;
  }
 }

 console.log(`São ${countStringProps} propriedades do tipo string` );
}


let zica = {
  nome: 'Gabriel',
  idade: 26,
  email: 'gomesgbr123@icloud.com',
  hobbies: ['Nadar'],
  altura : '1.67'
}

makeRandomObjet(zica);