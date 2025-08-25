"use strict";
{
    // Block Scoping
    {
        function UpdateProfile(data) { }
        function validateKeys(obj, keys) {
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
