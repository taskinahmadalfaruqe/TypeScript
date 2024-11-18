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
  // look up
  type Height = Area["height"];

  // type AreaString = {
  //   height: string;
  //   width: string;
  // };

  // type AreaString = {
  //   [key in keyof "height" | "width"]: string;
  // };

  type AreaString01 = {
    [key in keyof Area]: string;
  };

  // declear type with generic
  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const AreaCalculate: AreaString<{ height: number; width: number }> = {
    height: 100,
    width: 20,
  };

  // Blocked Scope
}
