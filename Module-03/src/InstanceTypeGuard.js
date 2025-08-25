"use strict";
{
    // Block Scoping
    class Student {
        constructor(name, roll, StudyClass) {
            this.name = name;
            this.roll = roll;
            this.StudyClass = StudyClass;
        }
        getRollNumber() {
            console.log("I am a Student");
        }
    }
    class SectionA extends Student {
        constructor(name, roll, StudyClass) {
            super(name, roll, StudyClass);
        }
        getSectionA() {
            console.log("My Section Is: A");
        }
    }
    class SectionB extends Student {
        constructor(name, roll, StudyClass) {
            super(name, roll, StudyClass);
        }
        getSectionB() {
            console.log("My Section Is: B");
        }
    }
    const isSectionA = (student) => {
        return student instanceof SectionA;
    };
    const isSectionB = (student) => {
        return student instanceof SectionB;
    };
    const GetStudent = (student) => {
        if (isSectionA(student)) {
            student.getSectionA();
        }
        else if (isSectionB(student)) {
            student.getSectionB();
        }
    };
    const Student01 = new SectionA("Taskin Ahmad Al Faruqe", 242910701126, "BSC in CST");
    const Student02 = new SectionB("Taskin Ahmad Al Faruqe", 242910701126, "BSC in CST");
    GetStudent(Student01);
    // console.log(Student.name);
    // Block Scoping
}
