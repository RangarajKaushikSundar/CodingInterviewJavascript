
/////////////////// RECURSIVE SOLUTION ///////////////////

let recFindCall = 0;

function recursiveFind(array, total, index) {
  ++recFindCall;
  if (total === 0) {
    return 1;
  } else if (total < 0 || index < 0) {
    return 0;
  } else if (total < array[index]) {
    return recursiveFind(array, total, index - 1);
  } else {
    return recursiveFind(array, total - array[index], index - 1) + recursiveFind(array, total, index - 1);
  }
}

function findSubsets(array, total) {
  return recursiveFind(array, total, array.length - 1);
}

/////////////////// DYNAMIC PROGRAMMING SOLUTION ///////////////////

let recFindMemCall = 0;

function recursiveFindMemoized(array, total, index, mem) {
  const indexKey = `${total}_${index}`;
  ++recFindMemCall;

  if (total === 0) {
    return 1;
  } else if (total < 0 || index < 0) {
    return 0;
  }

  if (Boolean(mem.hasOwnProperty(indexKey)) === true) {
    --recFindMemCall;
    return mem[indexKey];
  }

  let indexValue;

  if (total < array[index]) {
    indexValue = recursiveFindMemoized(array, total, index - 1, mem);
  } else {
    indexValue = recursiveFindMemoized(array, total - array[index], index - 1, mem) +
      recursiveFindMemoized(array, total, index - 1, mem);
  }
  mem[indexKey] = indexValue;
  return indexValue;
}

function findSubsetsMem(array, total) {
  const mem = {};
  return recursiveFindMemoized(array, total, array.length - 1, mem);
}

////// TESTING OUT SOLUTION

const inputArray = [2, 4, 6, 10];

console.log(findSubsets(inputArray, 16));
console.log(recFindCall);

console.log(findSubsetsMem(inputArray, 16));
console.log(recFindMemCall);

