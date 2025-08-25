"use strict";
{
    // Block Scoping
    class ArraySummation {
        constructor(array) {
            this.array = array;
        }
        calculateSum() {
            let summationValue = 0;
            this.array.forEach((value) => {
                summationValue += value;
            });
            return summationValue;
        }
    }
    // Usage
    const summationInstance = new ArraySummation([1, 2, 3]);
    const summation = summationInstance.calculateSum();
    console.log(summation);
    // Block Scoping
}
