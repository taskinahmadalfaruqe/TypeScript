{
  // Block Scoping

  // Problem
  //   Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

  // // Sample Input:
  // removeDuplicates([1, 2, 2, 3, 4, 4, 5])

  // // Sample Output:
  // [1, 2, 3, 4, 5]

  // Solution
  function removeDuplicates(array: number[]): number[] {
    return array.filter((value: number, index: number, self) => {
      return self.indexOf(value) === index;
    });
  }

  console.log(removeDuplicates([5, 4, 4, 7, 6]));
  // Block Scoping
}
