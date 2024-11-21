{
  //block scoping
  class NameStudent {
    name: string;
    roll: number;
    StudyClass: string;
    constructor(name: string, roll: number, StudyClass: string) {
      this.name = name;
      this.roll = roll;
      this.StudyClass = StudyClass;
    }
    findStudent() {
      console.log(
        `Student Name: ${this.name} && his/her roll Number: ${this.roll}`
      );
    }
  }
  const taskin = new NameStudent(
    "Taskin Ahmad Al Faruqe",
    242910701126,
    "BSE in CST"
  );
  taskin.findStudent();
  //block scoping
}
