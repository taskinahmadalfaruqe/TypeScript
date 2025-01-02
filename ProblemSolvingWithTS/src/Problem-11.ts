{
  // Block Scoping
  class DataProcessor {
    // Constructor accepts unknown type
    constructor(private data: unknown) {}

    // Method to process data based on its type
    processData(): unknown {
      if (typeof this.data === "string") {
        // If data is a string, return the uppercased version
        return this.data.toUpperCase();
      } else if (typeof this.data === "number") {
        // If data is a number, return the square of the number
        return this.data * this.data;
      } else {
        // Handle other types if necessary (or return null/undefined)
        return null;
      }
    }
  }

  // Example usage:
  const stringProcessor = new DataProcessor("hello");
  console.log(stringProcessor.processData()); // Output: "HELLO"

  const numberProcessor = new DataProcessor(5);
  console.log(numberProcessor.processData()); // Output: 25

  const booleanProcessor = new DataProcessor(true);
  console.log(booleanProcessor.processData()); // Output: null

  const objectProcessor = new DataProcessor({});
  console.log(objectProcessor.processData()); // Output: null

  // Block Scoping
}
