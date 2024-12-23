{
  // Block Scoping
  // Function to reverse a string
  // Class to handle string operations
  class StringManipulator {
    // Method to reverse a string
    reverseString(s: string): string {
      return s.split("").reverse().join("");
    }
  }

  // Example usage
  const manipulator = new StringManipulator();
  const input = "hello";
  const output = manipulator.reverseString(input);

  console.log("Input:", input); // Output: Input: hello
  console.log("Reversed:", output); // Output: Reversed: olleh

  // Block Scoping
}
