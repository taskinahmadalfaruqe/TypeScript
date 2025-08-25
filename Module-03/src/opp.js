"use strict";
class Person {
    getSleep() {
        console.log("i am sleeping 8 hours");
    }
}
class Student extends Person {
    getSleep() {
        console.log("I am sleeping 7 hours");
    }
}
class Developer extends Person {
    getSleep() {
        console.log("I am sleeping 6 hours");
    }
}
const getSleepTime = (perms) => {
    return perms.getSleep();
};
const Person01 = new Person();
const Person02 = new Student();
const Person03 = new Developer();
getSleepTime(Person02);
