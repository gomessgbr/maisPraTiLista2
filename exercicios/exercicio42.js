function makeData(){
  return {
    numbers : 22,
    strings : 'asfdjahnfjashf',
    array1 : [1,2,3,4,5],
    array2 : [1,2,3,4,5],
    array3 : [1,2,3,4,5],
    array4 : [1,2,3,4,5],
  }

}

function ItIsAnArray(data){
  let newDados = {};
  for (let key in data){
    let values = data[key];
    if(values !== null && (typeof values === 'object' || typeof values === 'function') && typeof values.length === 'number' ){
      newDados[key] = values;
    }
  }

  return newDados;
}

let data = makeData();

console.log(ItIsAnArray(data));