{
  // Block Scoping
  // basic generic With Interface
  interface genericType<T, Y> {
    Name: T;
    Mobile: Y;
  }

  const data: genericType<string, number> = {
    Name: "Taskin",
    Mobile: 242910701126,
  };
  // Block Scoping
}
