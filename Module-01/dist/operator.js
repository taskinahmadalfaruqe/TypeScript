"use strict";
{
    // ternary Operator
    const numberData = 50;
    const isTrue = numberData <= 18 ? "Go With Father." : "You Are Adult";
    console.log(isTrue);
    const isAdmin = null;
    const dataOfAdmin = isAdmin !== null && isAdmin !== void 0 ? isAdmin : "Guest";
    const dataOfAdmin2 = isAdmin ? "Guest" : "User";
    console.log({ dataOfAdmin }, { dataOfAdmin2 });
}
