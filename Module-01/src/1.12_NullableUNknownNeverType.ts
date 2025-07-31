{
  // Block Scoping
  //   nullable Type
  const userData = (Value: string | null) => {
    console.log(Value);
  };
  userData(null);

  //   unknownType
  const getData = (value: unknown) => {
    if (typeof value === "number") {
      console.log(value, "It is a number");
    } else if (typeof value === "string") {
      const [getNumber, b, c, ...d] = value.split(" ");
      console.log({ getNumber }, { ...d });
    } else console.log("type Error");
  };
  getData("Taskin Ahmad Al Faruqe An dddf afs aaa ddd");

  //   never type
  function throeError(msg:string):never{
    throw new Error(msg);
    
  }
  throeError("Hellow")
  // Block Scoping
}
