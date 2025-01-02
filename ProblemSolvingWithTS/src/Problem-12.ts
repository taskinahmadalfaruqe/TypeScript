{
  // Block Scoping
  class ErrorHandler {
    // Method with the `never` type that throws an error
    handleError(message: string): never {
        throw new Error(message);
    }
}

// Function that uses the ErrorHandler class
function processInput(input: string | null): string {
    const errorHandler = new ErrorHandler();

    if (input === null) {
        errorHandler.handleError("Input cannot be null");
    }

    return `input`; // TypeScript infers that `input` is non-null here
}

// Main code block to test the functionality
try {
    const result = processInput(null); // This will throw an error
    console.log(result);
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message); // Logs: "Input cannot be null"
    }
}

  // Block Scoping
}
