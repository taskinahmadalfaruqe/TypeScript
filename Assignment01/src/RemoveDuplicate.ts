{
  // Block Scoping
  function removeDuplicate(array: number[]): number[] {
    return array.filter((value: number, index: number, self) => {
      return self.indexOf(value) === index;
    });
  }

  console.log(removeDuplicate([5, 4, 4, 7, 6]));
  // Block Scoping
}
