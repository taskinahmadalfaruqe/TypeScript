{
  // Block Scoping
  const getArray = <T>(data: T): [T] => {
    return [data];
  };

  const res01 = getArray<string>("Taskin");
  const res02 = getArray<number>(242910701126);
  const res03 = getArray<boolean>(true);

  // Generic With Tuple Function
  const getTuple = <T, X>(Data01: T, Data02: X): [T, X] => {
    return [Data01, Data02];
  };

  const repTuple01 = getTuple<string, number>("Taskin", 212566);

  // Block Scoping
}
