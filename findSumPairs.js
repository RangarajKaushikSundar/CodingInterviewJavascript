const input = [1, 2, 4, 4]

function findPair(array, expected) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === expected) {
      return {
        left: array[left],
        right: array[right]
      };
    }
    if (sum < expected) {
      ++left;
    } else {
      --right;
    }
  }
  return "Not found";
}

console.log(findPair(input, 3));


// Adding comparator to sort

function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  }
}

input.sort(compare);
console.log(findPair(input, 3));


// When the array is unsorted.

const newInput = [5, 3, 4, 2, 1];

function findPairUnsorted(array, expected) {
  const visited = new Set();
  for (let current of array) {
    const comp = expected - current;
    if (visited.has(current)) {
      return `Found Pair ${current}, ${comp}`;
    }
    visited.add(comp);
  }
  return "Pair does not exist";
}

console.log(findPairUnsorted(newInput, 7));