// an array can be used to store a stack of values

// example using an array

// let letter = [];

// const word = 'racecars';

// let rword = '';

// // put the letters into stack
// for (let i = 0; i < word.length; i++) {
//   letter.push(word[i]);
// }

// // pop the stack in reverse orders
// for (let i = 0; i < word.length; i++) {
//   rword += letter.pop();
// }

// // compare the two words
// if (rword === word) {
//   console.log('The word is a palindrome');
// } else {
//   console.log('The word is not a palindrome');
// }

//example using a class called Stack
class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  // Add a value to the end of the stack
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // Remove the value at the end of the stack and return it
  pop() {
    this.count === 0 && undefined;

    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  // return the size of the stack
  size() {
    return this.count;
  }

  // peek into the items in the stack
  peek() {
    return this.storage[this.count - 1];
  }
}

const myStack = new Stack();

myStack.push(3);
myStack.push(5);
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
console.log(myStack.size());
