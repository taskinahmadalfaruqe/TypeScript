{
  // Block Scoping
  type Person = {
    Name: string;
    Age: number;
    Mobile: string;
    Email?: string;
  };

  // type pick
  type NameAge = Pick<Person, "Name" | "Age">;

  // type omit
  type Contect = Omit<Person, "Name" | "Age">;

  // type required
  type requiredPerson = Required<Person>;

  // type partial
  type PartialType = Partial<Person>;

  // type ReadOnly
  type ReadOnlyType = Readonly<Person>;
  const Person01: ReadOnlyType = {
    Name: "Taskin Ahmad Al Faruqe",
    Age: 24,
    Email: "taskinahmadalfaruqe@gmail.com",
    Mobile: "+8618652842502",
  };

  // Type Record
  type person02 = {
    name: string;
    age: string;
  };
  const PersonData: person02 = {
    name: "Taskin",
    age: "24",
  };
  // it onkeydown. but it not Dynamic. Thats Why we Use MediaRecorder.
  type person03 = Record<string, string>;
  const PersonData02: person03 = {
    name: "Taskin",
    age: "24",
    email: "taskinahmadalfaruqe@gmail.com",
  };

  // Emty Object type
  const EmtyObj: Record<string, unknown> = {};

  // Block Scoping
}
