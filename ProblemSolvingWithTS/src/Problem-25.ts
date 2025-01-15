{
  // Block Scoping
  {
    // Block Scoping
    interface Profile {
      name: string;
      age: number;
      email: string;
    }
    function UpdateProfile(data): Profile {}

    function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
      return keys.every((key) => key in obj);
    }

    // Example usage:
    const obj = {
      name: "Alice",
      age: 25,
      city: "Wonderland",
    };

    console.log(validateKeys(obj, ["name", "age"])); // true
    console.log(validateKeys(obj, ["name", "country"])); // false

    // Block Scoping
  }

  // Block Scoping
}
