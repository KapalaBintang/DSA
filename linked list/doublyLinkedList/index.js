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
    this.length = value ? 1 : 0;
  }

  push(value) {
    let newNode = new Node(value); //buat node baru

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) {
      console.log("gak ada bro");
      return null;
    }

    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    return true;
  }

  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }

  shift() {
    if (this.length === 0) {
      console.log("gak ada data yang harus dihapus");
      return null;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
    }

    return this;
  }
}

const doublyLinkedList = new DoublyLinkedList(2);

// doublyLinkedList.shift();

console.log(doublyLinkedList);
