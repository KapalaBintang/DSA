class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let node = this.head;
    while (counter !== index) {
      node = node.next;
      counter++;
    }
    return node;
  }

  set(index, newValue) {
    let spesificNode = this.get(index);
    if (spesificNode) {
      spesificNode.value = newValue;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.unshift(value);
    let newNode = new Node(value);
    let spesificNode = this.get(index - 1);
    newNode.next = spesificNode.next;
    spesificNode.next = newNode;
    this.length++;
    return true;
  }

  size() {
    return this.length;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

const linkedList = new LinkedList(10);
linkedList.push(2);
linkedList.push(3);

console.log(linkedList.size()); // 3
