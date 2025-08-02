{
  // Block Scope
  const TypeAssertionExample = (input: unknown) => {
    if (typeof input === "string") {
      console.log("Input is a string:", input);
    } else {
      console.log("Input is not a string");
    }
  };

  TypeAssertionExample("hello world");
  // Block Scope
}
