{
  // Blocked Scope
  const arrNumber: number[] = [1, 2, 3, 4, 3];
  const arrString: string[] = ["1", "2", "3", "4"];
  const arrString02: string[] = arrNumber.map((number) => number.toString());
  console.log(arrString02);
  type Area = {
    height: number;
    width: number;
  };
  // type AreaString = {
  //   height: string;
  //   width: string;
  // };

  type AreaString = {
    [key in "height" | "width"]: string;
  };

  // Blocked Scope
}
