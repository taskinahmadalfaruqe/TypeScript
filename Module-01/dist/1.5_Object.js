"use strict";
let objectData = {
    university: "JUST",
    firstName: "Taskin",
    midilName: "Ahmad Al",
    lastName: "Faruqe",
    isMaried: false,
};
// Assign a value in object 
let ObjectDataReadonly = {
    university: "JUST",
    firstName: "Taskin",
    midilName: "Ahmad Al",
    lastName: "Faruqe",
    isMaried: false,
};
// ObjectDataReadonly.university = "Jiangs University Of Science and Technology";
ObjectDataReadonly.midilName = undefined;
