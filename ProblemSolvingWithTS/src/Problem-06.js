"use strict";
{
    // Block scoping
    class Calculator {
        // Method to sum all numbers
        sumAll(...numbers) {
            return numbers.reduce((total, num) => total + num, 0);
        }
    }
    // Example usage:
    const calculator = new Calculator();
    console.log(calculator.sumAll(1, 2, 3, 4)); // Output: 10
    console.log(calculator.sumAll(10, 20, 30)); // Output: 60
    console.log(calculator.sumAll()); // Output: 0
    // Block scoping
}
