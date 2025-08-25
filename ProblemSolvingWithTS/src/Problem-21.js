"use strict";
{
    // Block Scoping
    class ObjectValidator {
        constructor(obj) {
            this.obj = obj;
        }
        // Method to validate if the given keys exist in the object
        validateKeys(keys) {
            // Use 'hasOwnProperty' to ensure we are checking properties on the object itself
            return keys.every((key) => Object.prototype.hasOwnProperty.call(this.obj, key));
        }
    }
    // Example usage:
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    // Create an instance of ObjectValidator
    const validator = new ObjectValidator(person);
    // Validate if the keys exist in the object
    console.log(validator.validateKeys(["name", "age"])); // Output: true
    console.log(validator.validateKeys(["name", "email"])); // Output: true
    console.log(validator.validateKeys(["name", "height"])); // Output: false (because 'height' doesn't exist)
    // Block Scoping
}
