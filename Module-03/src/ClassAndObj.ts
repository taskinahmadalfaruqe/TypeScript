{
  //block scoping
  class NameStudent {
    // name: string;
    // roll: number;
    // StudyClass: string;

    // add perameter propartis for remove dublicet code
    constructor(
      public name: string,
      public roll: number,
      public StudyClass: string
    ) {
      // this.name = name;
      // this.roll = roll;
      // this.StudyClass = StudyClass;
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
  const rana = new NameStudent("Masud Rana", 242910701116, "BSC in CST");
  rana.findStudent();
  //block scoping
}
