{
  // Block Scopimg
  // A generic class to manage and access object properties
  class PropertyManager<T> {
    private obj: T;

    constructor(obj: T) {
      this.obj = obj;
    }

    // Method to get a property value safely
    getProperty<K extends keyof T>(key: K): T[K] {
      return this.obj[key];
    }

    // Method to set a property value safely
    setProperty<K extends keyof T>(key: K, value: T[K]): void {
      this.obj[key] = value;
    }
  }

  // Example usage:
  const person = { name: "Alice", age: 30 };

  // Create an instance of PropertyManager
  const personManager = new PropertyManager(person);

  // Access properties safely
  console.log("Initial name:", personManager.getProperty("name")); // Output: Alice
  console.log("Initial age:", personManager.getProperty("age")); // Output: 30

  // Update properties safely
  personManager.setProperty("name", "Bob");
  console.log("Updated name:", personManager.getProperty("name")); // Output: Bob

  // TypeScript ensures only valid keys can be used
  // personManager.getProperty("height"); // Error: Argument of type '"height"' is not assignable to parameter of type '"name" | "age"'.

  // Block Scopimg
}
