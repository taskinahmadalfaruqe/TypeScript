{
  // Block Scoping
  class ArrayProcessor {
    private n: number;
    private array: number[];

    constructor() {
      this.n = 0;
      this.array = [];
    }

    public readInput(): void {
      console.log("Enter the number of elements:");
      const nInput = prompt();
      if (nInput !== null) {
        this.n = parseInt(nInput, 10);
      }

      console.log(`Enter ${this.n} elements:`);
      for (let i = 0; i < this.n; i++) {
        console.log(`Element ${i + 1}:`);
        const elementInput = prompt();
        if (elementInput !== null) {
          const element = parseInt(elementInput, 10);
          this.array.push(element);
        }
      }
    }

    public printReversed(): void {
      console.log("Reversed Array:");
      let reversedOutput = "";
      for (let i = this.n - 1; i >= 0; i--) {
        reversedOutput += this.array[i] + " ";
      }
      console.log(reversedOutput.trim());
    }
  }

  // Main execution
  const arrayProcessor = new ArrayProcessor();
  arrayProcessor.readInput();
  arrayProcessor.printReversed();

  // Block Scoping
}
