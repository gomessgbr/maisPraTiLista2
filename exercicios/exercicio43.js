function fusionObjs(obj1, obj2){
  return {...obj1, ...obj2};
}


let obj1 ={
  nome: 'Gabriel',
  idade : 23,
  altura : 1.67,
  sexo : 'M'
}

let obj2 = {
  nome: 'Miroslav',
  idade : 24,
  altura : 1.90,
  sexo : 'M',
  hobbies : ['Nadar', 'Pescar', 'Volêi', 'Tocar guitarra']
}

let newObject = fusionObjs(obj1, obj2);
console.log(newObject);