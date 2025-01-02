{
  // Block Scope
  // Type guard function to check if the value is a string
  function isString(value: unknown): value is string {
    return typeof value === "string";
  }

  // Function that prints the value in uppercase if it’s a string
  function printUpperCase(value: unknown): void {
    if (isString(value)) {
      console.log(value.toUpperCase());
    } else {
      console.log("Value is not a string.");
    }
  }

  // Example usage:
  printUpperCase("hello"); // Output: HELLO
  printUpperCase(42); // Output: Value is not a string.
  printUpperCase({}); // Output: Value is not a string.
  printUpperCase(true); // Output: Value is not a string.
  printUpperCase("world"); // Output: WORLD

  // Block Scope
}
