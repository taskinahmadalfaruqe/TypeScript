{
  // Block Scoping
  function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every((key) => key in obj);
  }

  // Sample Input
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"])); 

  // Block Scoping
}
