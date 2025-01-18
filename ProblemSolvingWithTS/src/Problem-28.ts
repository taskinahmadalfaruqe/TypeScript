{
  // Block Scoping
  class CharacterChecker {
    private input: string;

    constructor(input: string) {
      this.input = input;
    }

    public checkCharacter(): void {
      if (this.isNumber(this.input)) {
        console.log(`IT IS A NUMBER: ${this.input}`);
      } else {
        console.log("ALPHA");
        if (this.isUpperCase(this.input)) {
          console.log(`IT IS A CAPITAL DIGIT: ${this.input}`);
        } else {
          console.log(`IT IS A SMALL DIGIT: ${this.input}`);
        }
      }
    }

    private isNumber(char: string): boolean {
      return char >= "0" && char <= "9";
    }

    private isUpperCase(char: string): boolean {
      return char >= "A" && char <= "Z";
    }
  }

  // Example Usage
  const input = prompt("Enter what you want:"); // Takes input from the user
  if (input && input.length === 1) {
    // Ensure valid single character input
    const checker = new CharacterChecker(input);
    checker.checkCharacter();
  } else {
    console.log("Please enter a single character.");
  }

  // Block Scoping
}