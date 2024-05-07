

function attachFibonacci(){
  let arr = [];
  let first = 0;
  let second = 1;
  arr.push(first);
  arr.push(second);

  for(let i = 2; i < 15; i++){
    let sum = first + second;
    first = second;
    second = sum;

    arr.push(sum);
  }
  
  return arr;
}

console.log(attachFibonacci());
