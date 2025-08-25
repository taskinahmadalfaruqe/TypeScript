"use strict";
{
    // Block Scoping
    // Define the Car class with appropriate types
    class Car {
        // Constructor to initialize the car's properties
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        // Method to calculate the car's age
        getCarAge() {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
        // Optional method to get a formatted string with car details
        getCarInfo() {
            return `${this.make} ${this.model} (${this.year})`;
        }
    }
    // Instantiate a new Car object
    const car = new Car("Honda", "Civic", 2018);
    // Output the car's age
    console.log(`Car age: ${car.getCarAge()} years`);
    // Output the car's information
    console.log(`Car Info: ${car.getCarInfo()}`);
    // Block Scoping
}
