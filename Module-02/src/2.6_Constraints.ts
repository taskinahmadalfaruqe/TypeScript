{
  // Block Spacing
  //  Constrance

  interface Student {
    name: string;
    id: number;
    email: string;
  }
  const AddCourse = <T extends Student>(student: T) => {
    const AddNedCorse = "Next Level Developer";
    return {
      ...student,
      AddNedCorse,
    };
  };

  const student01 = AddCourse({
    name: "Taskin",
    id: 1,
    email: "taskin@example.com",
  });
  const student02 = AddCourse({
    name: "John",
    id: 2,
    email: "john@example.com",
    enrollment: "enrolled",
  });
  // Block Spacing
}
