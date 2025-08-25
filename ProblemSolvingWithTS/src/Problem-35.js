"use strict";
{
    // Block Scoping
    class Stack {
        constructor() {
            this.items = [];
        }
        // Push an item onto the stack
        push(item) {
            this.items.push(item);
        }
        // Pop an item from the stack
        pop() {
            return this.items.pop();
        }
        // Peek at the top item without removing it
        peek() {
            return this.items[this.items.length - 1];
        }
        // Check if the stack is empty
        isEmpty() {
            return this.items.length === 0;
        }
        // Get the size of the stack
        size() {
            return this.items.length;
        }
    }
    // Example usage:
    const numberStack = new Stack();
    numberStack.push(10);
    numberStack.push(20);
    numberStack.push(30);
    console.log(numberStack.peek()); // Output: 30
    console.log(numberStack.pop()); // Output: 30
    console.log(numberStack.size()); // Output: 2
    console.log(numberStack.isEmpty()); // Output: false
    // Block Scoping
}
