{
  // Block Scoping
  function processInput(input: string | number): number {
    // Narrowing using 'typeof' operator
    if (typeof input === "string") {
      return input.length; // Return length if input is a string
    } else if (typeof input === "number") {
      return input * input; // Return square if input is a number
    }

    // A return type that TypeScript expects for the 'string | number' union
    return 0;
  }

  // Examples
  console.log(processInput("hello")); // Output: 5 (length of "hello")
  console.log(processInput(4)); // Output: 16 (square of 4)

  // Block Scoping
}
