"use strict";
{
    // Block Scoping
    // spread operator
    const userData = ["Taskin", "Ahmad", "Al", "Faruqe", "humaira"];
    const userData02 = [
        "Taskin2",
        "Ahmad2",
        "Al2",
        "Faruqe2",
        "humaira2",
    ];
    userData.push(...userData02);
    console.log(userData);
}
