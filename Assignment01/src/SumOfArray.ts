{
  // Block Scoping.
  // Problem
  //   Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

  // // Sample Input:
  // sumArray([1, 2, 3, 4, 5]);

  // // Sample Output:
  // 15;

  // Solution
  const sumArray = (array: number[]) => {
    let summationValue: number = 0;
    array.map((value) => {
      summationValue += value;
    });
    return summationValue;
  };
  const summation = sumArray([1, 2, 3]);
  console.log(summation);
  // Block Scoping.
}
