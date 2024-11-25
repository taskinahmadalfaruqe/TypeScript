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
  }
  const Student01 = new Student(
    "Taskin Ahmad Al Faruqe",
    242910701129,
    "BSC in CST"
  );
  console.log(Student.name);
  // Block Scoping
}
