{
  // Block Scoped

  //   Generic Array
  type GenericeArray<T> = Array<T>;
  const array: number[] = [10, 20, 30];
  const Array01: Array<number> = [10, 20, 30];
  const Array02: GenericeArray<number> = [10, 20, 30];

  // Tuple Array
  type GerericTuple<X, Y> = [X, Y];
  const TupleArray: GerericTuple<string, string> = ["Mr-X", "Mis-Y"];

  //   Array Of Object
  type user = {
    Name: string;
    Roll: number;
    Depertment: string;
  };
  const ObjectOfArray: GenericeArray<user> = [
    {
      Name: "Taskin",
      Roll: 1020,
      Depertment: "CST",
    },
    {
      Name: "Ahmad",
      Roll: 1021,
      Depertment: "BBA",
    },
    {
      Name: "Al",
      Roll: 1022,
      Depertment: "CST",
    },
    {
      Name: "Faruqe",
      Roll: 1023,
      Depertment: "CST",
    },
  ];
  // Block Scoped
}
