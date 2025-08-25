"use strict";
{
    // Abstraction Emplement with Class.
    class Car {
        startEngine() {
            console.log("Car is starting");
        }
        engineStop() {
            console.log("Car Engine Stop");
        }
        test() {
            console.log(" All Done. Everything is good and work fine.");
        }
    }
    const ToyotaCar = new Car();
    ToyotaCar.startEngine();
    // Abstraction with Abstraction Class
    class Car2 {
    }
    class BMWCar extends Car2 {
        startEngine() {
            console.log("Engine start Successfully");
        }
        stopEngine() {
            console.log("Engine  Stop Succesesfully");
        }
    }
    const bmwCar = new BMWCar();
    bmwCar.startEngine();
    // Block Scoping
}
