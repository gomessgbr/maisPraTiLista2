function inventary(inventaryStoreA, inventaryStoreB){
  let combined = {};
  for (let item in inventaryStoreA) {
    combined[item] = inventaryStoreA[item];
  }

  for (let item in inventaryStoreB) {
      if (combined[item]) {
        combined[item] += inventaryStoreB[item];
      } else {
        combined[item] = inventaryStoreB[item];
      }
  }

  return combined;
}



let objA = {
  pencil: 10,
  notebook: 5,
  pen : 3,
  eraser: 6
}

let objB = {
  pencil: 5,
  eraser: 6
}

console.log(inventary(objA, objB));