{
  // Block Scoping
  // Type Alise
  const student01: {
    name: string;
    major: string;
    university: string;
    contactNumber: number;
  } = {
    name: "taskin Ahmad Al Faruqe",
    major: "cst",
    university: "just",
    contactNumber: 18652842502,
  };

  const student02: {
    name: string;
    major: string;
    university: string;
    id: number;
  } = {
    name: "taskin Ahmad Al Faruqe",
    major: "cst",
    university: "just",
    id: 18652842502,
  };

  // declear type alias:
  type Student = {
    name: string;
    major: string;
    university: string;
    contactNumber?: number;
    id: number;
  };
  const studentType01: Student = {
    name: "taskin Ahmad Al Faruqe",
    major: "cst",
    university: "just",
    contactNumber: 18652842502,
    id: 242910701126,
  };

  const studentType02: Student = {
    name: "taskin Ahmad Al Faruqe",
    major: "cst",
    university: "just",
    id: 18652842502,
  };

  type Username = string;
  type Boolien = boolean;
  const name: Username = "Taskin Ahmad Al Faruqe";
  const isTrue: Boolien = true;

  // type alias with function
  type Add = (x: number, y: number) => number;
  const addNumber: Add = (Num01, Num02) => Num01 + Num02;

  // Block Scoping
}
