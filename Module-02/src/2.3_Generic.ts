{
  // Block Scoping
  const RollNumber: number[] = [1, 2, 3, 4, 5];
  const StringArray: string[] = ["Taskin", "Ahmad", "Al", "Faruqe"];
  const BooleanArray: boolean[] = [true, false, true, false];

  //   Wright with generic type
  const genericNumberArray: Array<number> = [1, 2, 3, 4, 5];
  const genericStringArray: Array<string> = ["Taskin", "Ahmad", "Al", "Faruqe"];
  const genericBooleanArray: Array<boolean> = [true, false, true, false];

  //   Reuseable Generic Type
  type GenericArray<T> = Array<T>;

  const genericArrayNumber: GenericArray<number> = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ];

  //   generic Array of Object
  type UserData = {
    name: string;
    age: number;
    rolle: string;
  };

  const genericArrayObject: GenericArray<UserData> = [
    { name: "Taskin", age: 22, rolle: "Developer" },
    { name: "Ahmad", age: 23, rolle: "Designer" },
    { name: "Al", age: 24, rolle: "Manager" },
    { name: "Faruqe", age: 25, rolle: "Tester" },
  ];

  //   generic Tuple With Object
  type GenericTuple<T, X> = [T, X];
  const objectWithTuple = ["Taskin", 242910701126] as GenericTuple<
    string,
    number
  >;

  //   nested Array Of Object With Tuple
  type NestedArray<T, Y> = [T, { Name: T; id: Y }];
  type NestedArrayType = NestedArray<string, number>;
  const nestedArray: NestedArrayType[] = [
    ["Taskin", { Name: "Taskin", id: 242910701126 }],
    ["Ahmad", { Name: "Ahmad", id: 242910701127 }],
    ["Al", { Name: "Al", id: 242910701128 }],
    ["Faruqe", { Name: "Faruqe", id: 242910701129 }],
  ];

  // Block Scoping
}
