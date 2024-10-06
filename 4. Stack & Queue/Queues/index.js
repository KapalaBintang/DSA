class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
      return this;
    }
  }

  dequeue() {
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }

    const temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

const queue1 = new Queue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.dequeue();
console.log(queue1);
