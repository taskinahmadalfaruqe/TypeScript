"use strict";
{
    // Block Scoping
    class ErrorHandler {
        // Method with the `never` type that throws an error
        handleError(message) {
            throw new Error(message);
        }
    }
    // Function that uses the ErrorHandler class
    function processInput(input) {
        const errorHandler = new ErrorHandler();
        if (input === null) {
            errorHandler.handleError("Input cannot be null");
        }
        return `input`;
    }
    // Main code block to test the functionality
    try {
        const result = processInput(null);
        console.log(result);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
    // Block Scoping
}
