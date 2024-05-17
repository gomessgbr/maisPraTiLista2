function arrayStrings() {
  let arr = ['teste1', 'teste', 'teste', 'teste2', 'teste3'];
  let stringsObj = {};

  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    if (stringsObj[str]) {
      stringsObj[str] += 1;
    } else {
      stringsObj[str] = 1;
    }
  }

  return stringsObj;
}

let result = arrayStrings();
console.log(result);