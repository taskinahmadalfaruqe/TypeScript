{
  // Block Scoping
  class ArraySummation {
    private array: number[];
  
    constructor(array: number[]) {
      this.array = array;
    }
  
    public calculateSum(): number {
      let summationValue: number = 0;
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
