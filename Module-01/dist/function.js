"use strict";
{
    //function=2
    //arrow funtion
    //normal function
    function addTwoNymber(number01, number02) {
        return number01 + number02;
    }
    const numbers = addTwoNymber(10, 20);
    console.log(numbers);
    // arrow function
    const ArrowFunction = (num01, num02) => num01 + num02;
    console.log(ArrowFunction(20, 50));
    //object function
    const poorUser = {
        name: "Taskin Ahmad Al Faruqe",
        balance: 20,
        addBalance(balance) {
            return this.balance + balance;
        },
    };
    console.log(poorUser.addBalance(100));
    //array map with function
    const arr01 = [10, 20, 30, 40];
    const arr02 = arr01.map((element) => element * element);
    console.log(arr02);
}
