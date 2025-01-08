{
  // Block Scoping
  // A generic class to validate keys in an object
  class ObjectValidator<T> {
    private obj: T;

    constructor(obj: T) {
      this.obj = obj;
    }

    // Method to validate if the given keys exist in the object
    validateKeys(keys: (keyof T)[]): boolean {
      return keys.every((key) => key in this.obj);
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
