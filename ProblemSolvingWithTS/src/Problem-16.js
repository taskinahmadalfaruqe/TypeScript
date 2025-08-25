"use strict";
{
    // Block Scoping
    class PropertyAccessor {
        constructor(obj) {
            this.obj = obj;
        }
        getProperty(key) {
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
