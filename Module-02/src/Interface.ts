{
  // Block Scoped
  //   Type and Interface With Object

  //   Type
  type User1 = {
    Name: string;
    IdNumber: number;
  };

  // interface
  interface User02 {
    UserName: string;
    MobileNumber: number;
  }

  //   how to extend type Alies or Interface and type

  //type extend
  type User1Extend = User1 & { Roll: number };

  //Interface Extend
  interface User02Extend extends User02 {
    Roll: number;
  }

  const UserData: User1Extend = {
    Name: "Taskin Ahmad Al Faruqe.",
    IdNumber: 1,
    Roll: 52,
  };

  const UserData02: User02Extend = {
    UserName: "Taskin Ahmad Al Faruqe",
    MobileNumber: 1318021256,
    Roll: 10,
  };
  console.log(UserData);
  console.log(UserData02);

  //   Type and Interface With Array
  type Array01 = number[];
  interface Array02 {
    [index: number]: number;
  }
  const Array03: Array01 = [10, 20, 30, 40, 50];
  const Array04: Array02 = [10, 20, 30, 40, 50];

  // function with interface and type;

  //   decler a function with type
  type Function01 = (num01: number, num02: number) => number;

  //   decler a function with Interface
  interface Function02 {
    (num01: number, num02: number): number;
  }
  //basic add function
  const HendelAdd: Function01 = (num01, num02) => num01 + num02;
  // Block Scoped
}
