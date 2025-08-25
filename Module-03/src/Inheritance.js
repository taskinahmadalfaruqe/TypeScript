"use strict";
{
    // Block Scoped
    // inheritance meens extends the class and take some extra value
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(SleepTime) {
            console.log(`Person Name: ${this.name} and he Sleeps ${SleepTime} Hours.`);
        }
    }
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const Student01 = new Student("taskin", 20, "JUST");
    Student01.name;
    class Teacher extends Person {
        constructor(name, age, address, Position) {
            super(name, age, address);
            this.Position = Position;
        }
    }
    const Teacher01 = new Teacher("taskin", 40, "JUST", "Profesor");
    Teacher01.name;
    // Block Scoped
}
