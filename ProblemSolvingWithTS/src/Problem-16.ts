{
  // Block Scoping
  class PropertyAccessor<T> {
    private obj: T;

    constructor(obj: T) {
      this.obj = obj;
    }

    getProperty<K extends keyof T>(key: K): T[K] {
      return this.obj[key];
    }
  }

  // Example usage:
  const person = {
    name: "Alice",
    age: 30,
    isStudent: false,
  };

  const accessor = new PropertyAccessor(person);

  const name = accessor.getProperty("name"); // "Alice"
  const age = accessor.getProperty("age"); // 30
  const isStudent = accessor.getProperty("isStudent"); // false

  console.log(name, age, isStudent);

  // Block Scoping
}
