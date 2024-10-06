// Defitinion
// A Stack is a linear data structure that holds a linear, ordered sequence of elements. It is an abstract data type. A Stack works on the LIFO process (Last In First Out), i.e., the element that was inserted last will be removed first.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  push(newValue) {
    const newNode = new Node(newValue);

    if (this.length === 0) {
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
      this.length++;
      return this;
    }
  }

  pop() {
    if (this.length === 0) {
      console.log("there is nothing to be removed!");
      return undefined;
    }

    const temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

const stack1 = new Stack("book 1");
stack1.push("book 2");
stack1.push("book 3");
stack1.pop();

console.log(stack1);
