{
  // Block Scoped
  // inheritance meens extends the class and take some extra value
  class Person {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(SleepTime: number) {
      console.log(
        `Person Name: ${this.name} and he Sleeps ${SleepTime} Hours.`
      );
    }
  }
  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  const Student01 = new Student("taskin", 20, "JUST");
  Student01.name;

  class Teacher extends Person {
    Position: string;
    constructor(name: string, age: number, address: string, Position: string) {
      super(name, age, address);
      this.Position = Position;
    }
  }
  const Teacher01 = new Teacher("taskin", 40, "JUST", "Profesor");
  Teacher01.name;
  // Block Scoped
}
