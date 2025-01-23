{
    // Block Scoping
    class Vehicle {
        type: string;
        licensePlate: string;

        constructor(type: string, licensePlate: string) {
            this.type = type;
            this.licensePlate = licensePlate;
        }

        getDetails(): string {
            return `Type: ${this.type}, License Plate: ${this.licensePlate}`;
        }
    }

    class Car extends Vehicle {
        numberOfDoors: number;

        constructor(licensePlate: string, numberOfDoors: number) {
            super("Car", licensePlate);
            this.numberOfDoors = numberOfDoors;
        }

        getDetails(): string {
            return `${super.getDetails()}, Number of Doors: ${this.numberOfDoors}`;
        }
    }

    class Motorcycle extends Vehicle {
        hasSidecar: boolean;

        constructor(licensePlate: string, hasSidecar: boolean) {
            super("Motorcycle", licensePlate);
            this.hasSidecar = hasSidecar;
        }

        getDetails(): string {
            return `${super.getDetails()}, Has Sidecar: ${this.hasSidecar}`;
        }
    }

    class ParkingLot {
        private vehicles: Vehicle[] = [];

        addVehicle(vehicle: Vehicle): void {
            this.vehicles.push(vehicle);
        }

        removeVehicle(licensePlate: string): boolean {
            const index = this.vehicles.findIndex(v => v.licensePlate === licensePlate);
            if (index !== -1) {
                this.vehicles.splice(index, 1);
                return true;
            }
            return false;
        }

        listVehicles(): void {
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