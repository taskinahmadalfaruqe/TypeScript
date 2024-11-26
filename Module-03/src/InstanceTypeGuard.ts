{
  // Block Scoping
  class Student {
    name: string;
    roll: number;
    StudyClass: string;
    constructor(name: string, roll: number, StudyClass: string) {
      this.name = name;
      this.roll = roll;
      this.StudyClass = StudyClass;
    }
    getRollNumber() {
      console.log("I am a Student");
    }
  }
  class SectionA extends Student {
    constructor(name: string, roll: number, StudyClass: string) {
      super(name, roll, StudyClass);
    }
    getSectionA() {
      console.log("My Section Is: A");
    }
  }
  class SectionB extends Student {
    constructor(name: string, roll: number, StudyClass: string) {
      super(name, roll, StudyClass);
    }
    getSectionB() {
      console.log("My Section Is: B");
    }
  }
  const isSectionA = (student: Student): student is SectionA => {
    return student instanceof SectionA;
  };
  const isSectionB = (student: Student): student is SectionB => {
    return student instanceof SectionB;
  };
  const GetStudent = (student: Student) => {
    if (isSectionA(student)) {
      student.getSectionA();
    } else if (isSectionB(student)) {
      student.getSectionB();
    }
  };
  const Student01 = new SectionA(
    "Taskin Ahmad Al Faruqe",
    242910701126,
    "BSC in CST"
  );
  const Student02 = new SectionB(
    "Taskin Ahmad Al Faruqe",
    242910701126,
    "BSC in CST"
  );
  GetStudent(Student01);
  // console.log(Student.name);
  // Block Scoping
}
