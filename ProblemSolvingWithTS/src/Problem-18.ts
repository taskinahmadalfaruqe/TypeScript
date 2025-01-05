{
  // Block Scoping
  // Define the Car class with appropriate types
  class Car {
    make: string;
    model: string;
    year: number;

    // Constructor to initialize the car's properties
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    // Method to calculate the car's age
    getCarAge(): number {
      const currentYear: number = new Date().getFullYear();
      return currentYear - this.year;
    }

    // Optional method to get a formatted string with car details
    getCarInfo(): string {
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