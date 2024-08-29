class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value); //buat node baru

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;

    return this;
  }
}

const doublyLinkedList = new DoublyLinkedList(1);
doublyLinkedList.push(2);

console.log(doublyLinkedList);
