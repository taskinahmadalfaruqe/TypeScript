{
  // Block Scoping
  // Generic function to remove duplicates from an array
  function removeDuplicates<T>(items: T[]): T[] {
    // Use a Set to store unique items, as it automatically handles duplicates
    return Array.from(new Set(items));
  }

  // Example usage:
  const numbers = [1, 2, 2, 3, 4, 4, 5];
  const uniqueNumbers = removeDuplicates(numbers);
  console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

  const strings = ["apple", "banana", "apple", "orange", "banana"];
  const uniqueStrings = removeDuplicates(strings);
  console.log(uniqueStrings); // Output: ["apple", "banana", "orange"]

  // Generic interface that works with the function
  interface Processor<T> {
    process(items: T[]): T[];
  }

  // Implementation of the Processor interface
  class UniqueProcessor<T> implements Processor<T> {
    process(items: T[]): T[] {
      return removeDuplicates(items);
    }
  }

  // Example usage of the interface implementation
  const numberProcessor = new UniqueProcessor<number>();
  console.log(numberProcessor.process(numbers)); // Output: [1, 2, 3, 4, 5]

  const stringProcessor = new UniqueProcessor<string>();
  console.log(stringProcessor.process(strings)); // Output: ["apple", "banana", "orange"]

  // Block Scoping
}
