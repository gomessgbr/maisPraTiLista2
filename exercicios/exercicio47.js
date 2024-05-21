function transformObj(obj, transformFunc) {
  let transformedObj = {};

  for (let key in obj) {
      transformedObj[key] = transformFunc(obj[key]);
  }

  return transformedObj;
}


function toModifyObj(value) {
  if (typeof value === 'string') {
      return value.toUpperCase();
  } else if(typeof value === 'number' ){
    return value * 2;
  }
  return value;
}

let testeObj = {
  name: 'gabriel',
  age: '26',
  gender: 'Masculino',
  height: 1.67
};

let novoObj = transformObj(testeObj, toModifyObj);

console.log(novoObj);

