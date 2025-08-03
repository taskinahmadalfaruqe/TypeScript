{
  // Block Scoping

  // Type Alies Vs interface

  type UserType01 = string;

  interface UserType02 {
    name: string;
  }
  const UserName: UserType01 = "Taskin Ahmad Al Faruqe";
  //   const UserName: UserType02 = "Taskin Ahmad Al Faruqe";

  //   User Declear With type Alise
  type UserData03 = {
    name: string;
    age: number;
  };

  //   User Declare With Interface
  interface IFUserData04 {
    name: string;
    age: number;
  }

  const userData: IFUserData04 = {
    name: "Taskin Ahmad Al Faruqe",
    age: 25,
  };

  //   Extend property with interface and type alies
  // Type Alies

  type UserData05 = UserData03 & { roll: string };

  // With Interface
  interface IFUserDarta05 extends IFUserData04 {
    roll: string;
  }
  const userDataExtend: IFUserDarta05 = {
    name: "Taskin Ahmad Al Faruqe",
    age: 25,
    roll: "Developer",
  };

  //   interFace And Type Alies With Function;
  type AddFunction = (num1: number, num2: number) => number;
  interface IFAddFunctiuon {
    (num01: number, numb02: number): number;
  }
  const addFunction: AddFunction = (num01, num02) => num01 + num02;
  const addFunction02: IFAddFunctiuon = (num01, num02) => num01 + num02;

  //   Type Alies And Interface With Array
  type UserArray = string[];
  interface IfUserArray {
    [index: number]: string;
  }

  const user: IfUserArray = ["Taskin", "Ahmad", "Al", "Faruqe"];

  // Block Scoping
}
