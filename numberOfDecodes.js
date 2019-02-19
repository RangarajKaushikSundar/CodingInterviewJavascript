
/////////////////// RECURSIVE SOLUTION ///////////////////

function numberOfDecodes(input) {
  return recursiveFind(input, input.length);
}

let noOfRecs = 0;

function recursiveFind(input, index) {
  const currentIndex = input.length - index;
  ++noOfRecs;
  if(index < 0 || input[currentIndex] === '0') {
    return 0;
  } else if(index === 0 || input[currentIndex] === '') {
    return 1;
  }
  
  let result = recursiveFind(input, index - 1);
  const pairOfChars = input.slice(currentIndex, 2);
  
  if(Number(pairOfChars) < 27 && index >= 2) {
    result += recursiveFind(input, index - 2);
  }
  
  return result;
}

/////////////////// DYNAMIC PROGRAMMING SOLUTION ///////////////////

let noOfRecMem = 0;

function numberOfDecodesMemoized(input) {
  return recursiveFindMemoized(input, input.length, {});
}

function recursiveFindMemoized(input, index, mem) {
  const currentIndex = input.length - index;
  ++noOfRecMem;
  if(index < 0 || input[currentIndex] === '0') {
    return 0;
  } else if(index === 0 || input[currentIndex] === '') {
    return 1;
  }
  
  if(mem.hasOwnProperty(index)) {
    --noOfRecMem;
    return mem[index]; 
  }
  
  let result = recursiveFindMemoized(input, index - 1, mem);
  const pairOfChars = input.slice(currentIndex, 2);
  
  if(Number(pairOfChars) < 27 && index >= 2) {
    result += recursiveFindMemoized(input, index - 2, mem);
  }

  mem[index] = result;
  
  return result;
}

////// TESTING OUT SOLUTION

let input = '1111131234';

console.log(numberOfDecodes(input));
console.log(noOfRecs);

console.log(numberOfDecodesMemoized(input));
console.log(noOfRecMem);


////// SETTING UP DICTIONARY /////////

let alpha = 'a';
const key = {};
key[alpha]  = `${1}`;

for(let i = 2; i < 27; i++) {
  alpha = nextChar(alpha);
  key[alpha] = `${i}`;
}

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

