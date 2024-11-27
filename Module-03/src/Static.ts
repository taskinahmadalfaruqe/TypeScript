{
  // Block Scoping
  class Counter {
    static Value: number = 0;
    static increment() {
      return (Counter.Value = Counter.Value + 1);
    }
    static decrement() {
      return (Counter.Value = Counter.Value - 1);
    }
  }
  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.decrement());
  console.log(Counter.increment());
  // Block Scoping
}
