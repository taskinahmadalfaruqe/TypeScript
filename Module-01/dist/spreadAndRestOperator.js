"use strict";
{
    // Speread Operator with array
    const arr = ["taskin", "nahid"];
    const arr02 = ["Taskin", "Nahid"];
    arr.push(...arr02);
    console.log(arr);
    // Speread Operator with object
    const obj01 = {
        Friend01: "Taskin",
        Friend02: "Ahmad",
        Friend03: "Al",
        Friend04: "Faruqe",
    };
    const obj02 = {
        Friend05: "Taskin",
        Friend06: "Ahmad",
        Friend07: "Al",
        Friend08: "Faruqe",
    };
    const obj03 = {
        Friend09: "Taskin",
        Friend10: "Ahmad",
        Friend11: "Al",
        Friend12: "Faruqe",
    };
    const allFriends = Object.assign(Object.assign(Object.assign({}, obj01), obj02), obj03);
    console.log(allFriends);
    // rest operator with for each function
}
