function tenTermsFibonacci() {
  let first = 0;
  let second = 1;

  console.log(first);
  console.log(second);

  for (let i = 2; i < 10; i++) {
    let sum = first + second;
    console.log(sum);
    first = second;
    second = sum;
  }
}

tenTermsFibonacci();