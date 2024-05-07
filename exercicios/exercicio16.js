function getRandomNumber(){
  return Math.floor(Math.random() * 99);
}

function atributeArr(){
  let arr = [];
  for(let i = 0;  i < 20; i++){
    let randomNumber = getRandomNumber()
    arr.push(randomNumber);

  }
  console.log(arr);
  return sortArr(arr);

}

function sortArr(arr){
  for (let i = 0; i < arr.length - 1; i++) {
    let pivoIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[pivoIndex]) {
        pivoIndex = j;
      }
    }
    if (pivoIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[pivoIndex];
      arr[pivoIndex] = temp;
    }
  }
  return arr;

}

console.log(atributeArr());