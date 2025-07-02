// Learning Function
// 01 normal function
// 02 Arrow Function 
function addNumber(num1: number, num2: number) {
    num1 + num2;
}
addNumber(1, 2)

const AddNumberA = (num01: number, num02: number) => num01 + num02;
console.log(AddNumberA(2, 3));

// object with function
const bankAccount = {
    name: "Taskin",
    balance: 10,
    addBalance(NewBalance: number) {
        return this.balance + NewBalance;
    }
}