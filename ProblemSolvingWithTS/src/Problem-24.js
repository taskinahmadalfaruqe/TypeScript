"use strict";
{
    // Block Scoping
    const sumArray = (array) => {
        let summationValue = 0;
        array.map((value) => {
            summationValue += value;
        });
        return summationValue;
    };
    const summation = sumArray([1, 2, 3]);
    console.log(summation);
    // Block Scoping
}
