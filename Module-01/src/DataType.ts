// Basic Data Type Of Typescript And How to deceler

// String
let StringData: string = "Name";

//Number
let NumberData: number = 10;

// Bool
let y: boolean = true;

// undefined
let undefinedData: undefined = undefined;

// null
let nullData: null = null;

// Array
// string type array
let array01: string[] = ["Taskin", "Rana", "Sabbir"];

// number type array
let numberArray: number[] = [10, 20, 30, 40, 50];
// insert a value in array
numberArray.push(200);
// numberArray.push("Number"); not possible to push any thing without number.

// tupple
let tupleArray: [number, string] = [20, "mr-x"];
tupleArray[0] = 100;
tupleArray[1] = "Taskin";
console.log(tupleArray);

let tupleArray2: [number, string] = [20, "mr-x"];
tupleArray2 = [10, "Taskin"];
console.log(tupleArray2);
