{
  // Block Scoping

  // Abstraction in object oriented programmaing.

  // idea of Abstraction
  interface vehicle {
    startEngine(): void;
    engineStop(): void;
  }
  // Abstraction Emplement with Class.
  class Car implements vehicle {
    startEngine(): void {
      console.log("Car is starting");
    }
    engineStop(): void {
      console.log("Car Engine Stop");
    }
    test() {
      console.log(" All Done. Everything is good and work fine.");
    }
  }
  const ToyotaCar = new Car();
  ToyotaCar.startEngine();

  // Abstraction with Abstraction Class
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
  }
  class BMWCar extends Car2 {
    startEngine(): void {
      console.log("Engine start Successfully");
    }
    stopEngine(): void {
      console.log("Engine  Stop Succesesfully");
    }
  }
  const bmwCar = new BMWCar();
  bmwCar.startEngine();

  // Block Scoping
}
