class LinkedList {
  constructor(next, value){
    this.next = next;
    this.value = value;
  }
}

const head = new LinkedList(null, 1);
head.next = new LinkedList(null,2);
head.next.next = new LinkedList(null,3);
head.next.next.next = new LinkedList(null,4);
head.next.next.next.next = new LinkedList(null,5);
head.next.next.next.next.next = new LinkedList(null,6);


// console.log(head);

function findNthfromLast(head, n) {
  if(Boolean(head) === false || n < 1) {
    console.log("Bad Input");
    return;
  }
  let runner = head;
  let chaser = head;
  
  for(let i = 0; i < n-1; i++) {
    runner = runner.next;
    if(runner === null) {
      console.log('Does not exist');
      return;
    }
  }
  
  while(runner.next !== null) {
    runner = runner.next;
    chaser = chaser.next;
  }
  
  return chaser;
}

function deleteNode(node) {
  if(node === null  || node.next === null) {
    return;
  }
  
  node.value = node.next.value;
  node.next = node.next.next;
  return;
}

deleteNode(head.next.next.next.next.next)

console.log(head);


// console.log(findNthfromLast(head, 6))

