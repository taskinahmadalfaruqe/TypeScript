{
  // Block Scoping
  // Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.
  {
    function filterEvenNumbers(numbers: number[]): number[] {
      return numbers.filter((num) => num % 2 === 0);
    }

    // Sample Input
    console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
  }
  // Block Scoping
}
