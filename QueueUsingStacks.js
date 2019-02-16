class Queue {
  
  constructor() {
    this.stack1 = new Array();
    this.stack2 = new Array();
  }
  
  enqueue(object) {
    console.log('Enqueue '+ object);
    this.stack1.push(object);
  }
  
  dequeue() {
    if(this.size() < 1) {
      console.log('Nothing to dequeue');
    }
    if(this.stack2.length > 0) {
      return this.stack2.pop();
    }
    while(this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }
  
  size() {
    return this.stack1.length + this.stack2.length
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Size " + queue.size());
console.log("Dequeuing: "+queue.dequeue());
console.log("Dequeuing: "+queue.dequeue());
console.log("Dequeuing: "+queue.dequeue());
console.log("Dequeuing: "+queue.dequeue());

