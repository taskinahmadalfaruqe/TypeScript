"use strict";
{
    // object destructuring destructuring.ts
    const userObject = {
        id: 10120,
        name: {
            FirstName: "Taskin",
            MiddleName: "Ahmad",
            lastName: "Al Faruqe",
        },
        phoneNumber: "012222222",
        address: "China",
    };
    const { name: { MiddleName }, } = userObject;
    console.log(MiddleName);
    // Array Destructuring
    const arr01 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const [a, b, , , , c, d, ...rest] = arr01;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(rest);
}
