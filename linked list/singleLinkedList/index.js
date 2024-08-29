class Node {
  constructor(value) {
    this.head = value;
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

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    // alternative way
    // for (let i = 0; i < this.length - 1; i++) {
    //     prev = temp;
    //     temp = temp.next;
    //   }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    return temp;
  }

  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    this.head = this.head.next;
    this.length--;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return undefined;
    return this.tail;
  }

  get(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (index === counter) return node;

      counter++;
      node = node.next;
    }

    return null;
  }

  set(index, newValue) {
    if (!this.head) {
      console.log("there is no node");
      return null;
    }

    let spesificNode = this.get(index);

    if (spesificNode) {
      spesificNode.head = newValue;
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (!this.head) return this.unshift(value);

    let newNode = new Node(value);
    let spesificNode = this.get(index - 1);

    if (!spesificNode) {
      console.log("index yang anda masukkan melebihi batas length dari arrayList");
      return null;
    }

    newNode.next = spesificNode.next;
    spesificNode.next = newNode;
    this.length++;

    return true;
  }

  size() {
    let counter = 0;
    let temp = this.head;

    while (temp) {
      console.log(temp);
      counter++;
      temp = temp.next;
    }

    return counter;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;

    return null;
  }
}

const linkedList = new LinkedList(10);
linkedList.push(2);

console.log(linkedList.size());

// //

// 1. bikin function yang mempunyai satu parameter dengan tipe data integer
// 2. mengecek kondisi n ketika 1 dan 0
// 3. return hasil perkalian antara n dengan function factorial yang argumen n nya dikurangi 1
// 4. coba (●'◡'●)

// function factorial(n) {
//   if (n === 1) return 1;
//   else if (n === 0) return null;

//   return n * factorial(n - 1);
// }

// console.log(factorial(4));

// function fibonacci(n) {
//   const fib = [0, 1];

//   for (let i = 2; i < n; i++) {
//     fib.push(fib[i - 1] + fib[i - 2]);
//   }

//   return fib;
// }

// const attempt = fibonacci(1);

// console.log(attempt);
