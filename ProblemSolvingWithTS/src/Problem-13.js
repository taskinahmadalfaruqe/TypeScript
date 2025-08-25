"use strict";
{
    // Block Scoping
    // Generic function to remove duplicates from an array
    function removeDuplicates(items) {
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
    // Implementation of the Processor interface
    class UniqueProcessor {
        process(items) {
            return removeDuplicates(items);
        }
    }
    // Example usage of the interface implementation
    const numberProcessor = new UniqueProcessor();
    console.log(numberProcessor.process(numbers)); // Output: [1, 2, 3, 4, 5]
    const stringProcessor = new UniqueProcessor();
    console.log(stringProcessor.process(strings)); // Output: ["apple", "banana", "orange"]
    // Block Scoping
}
