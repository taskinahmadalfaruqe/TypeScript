"use strict";
{
    // Block Scoping
    class Counter {
        static increment() {
            return (Counter.Value = Counter.Value + 1);
        }
        static decrement() {
            return (Counter.Value = Counter.Value - 1);
        }
    }
    Counter.Value = 0;
    console.log(Counter.increment());
    console.log(Counter.increment());
    console.log(Counter.increment());
    console.log(Counter.decrement());
    console.log(Counter.increment());
    // Block Scoping
}
