{
    // Block Scoping
    class Stack<T> {
        private items: T[];

        constructor() {
            this.items = [];
        }

        // Push an item onto the stack
        push(item: T): void {
            this.items.push(item);
        }

        // Pop an item from the stack
        pop(): T | undefined {
            return this.items.pop();
        }

        // Peek at the top item without removing it
        peek(): T | undefined {
            return this.items[this.items.length - 1];
        }

        // Check if the stack is empty
        isEmpty(): boolean {
            return this.items.length === 0;
        }

        // Get the size of the stack
        size(): number {
            return this.items.length;
        }
    }

    // Example usage:
    const numberStack = new Stack<number>();
    numberStack.push(10);
    numberStack.push(20);
    numberStack.push(30);

    console.log(numberStack.peek()); // Output: 30
    console.log(numberStack.pop());  // Output: 30
    console.log(numberStack.size()); // Output: 2
    console.log(numberStack.isEmpty()); // Output: false
    // Block Scoping
}