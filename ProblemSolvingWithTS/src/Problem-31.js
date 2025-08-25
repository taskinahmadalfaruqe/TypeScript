"use strict";
{
    // Block Scoping
    class Vehicle {
        constructor(type, licensePlate) {
            this.type = type;
            this.licensePlate = licensePlate;
        }
        getDetails() {
            return `Type: ${this.type}, License Plate: ${this.licensePlate}`;
        }
    }
    class Car extends Vehicle {
        constructor(licensePlate, numberOfDoors) {
            super("Car", licensePlate);
            this.numberOfDoors = numberOfDoors;
        }
        getDetails() {
            return `${super.getDetails()}, Number of Doors: ${this.numberOfDoors}`;
        }
    }
    class Motorcycle extends Vehicle {
        constructor(licensePlate, hasSidecar) {
            super("Motorcycle", licensePlate);
            this.hasSidecar = hasSidecar;
        }
        getDetails() {
            return `${super.getDetails()}, Has Sidecar: ${this.hasSidecar}`;
        }
    }
    class ParkingLot {
        constructor() {
            this.vehicles = [];
        }
        addVehicle(vehicle) {
            this.vehicles.push(vehicle);
        }
        removeVehicle(licensePlate) {
            const index = this.vehicles.findIndex(v => v.licensePlate === licensePlate);
            if (index !== -1) {
                this.vehicles.splice(index, 1);
                return true;
            }
            return false;
        }
        listVehicles() {
            if (this.vehicles.length === 0) {
                console.log("No vehicles in the parking lot.");
                return;
            }
            console.log("Vehicles in the parking lot:");
            for (const vehicle of this.vehicles) {
                console.log(vehicle.getDetails());
            }
        }
    }
    // Example Usage
    const parkingLot = new ParkingLot();
    const car1 = new Car("ABC123", 4);
    const motorcycle1 = new Motorcycle("XYZ789", true);
    parkingLot.addVehicle(car1);
    parkingLot.addVehicle(motorcycle1);
    parkingLot.listVehicles();
    parkingLot.removeVehicle("ABC123");
    parkingLot.listVehicles();
    // Block Scoping
}
