"use strict";
{
    // Block Scoping
    class CharProcessor {
        constructor(char) {
            if (char.length !== 1) {
                throw new Error("Input must be a single character.");
            }
            this.char = char;
        }
        processChar() {
            const asciiCode = this.char.charCodeAt(0);
            if (asciiCode >= 48 && asciiCode <= 57) {
                // '0' to '9'
                return `Input Number is: ${this.char}, And Output Number Is: ${this.char}`;
            }
            else if (asciiCode >= 97 && asciiCode <= 122) {
                // 'a' to 'z'
                const upperCase = String.fromCharCode(asciiCode - 32);
                return `Input Lowercase: ${this.char}, Output Uppercase: ${upperCase}`;
            }
            else if (asciiCode >= 65 && asciiCode <= 90) {
                // 'A' to 'Z'
                const lowerCase = String.fromCharCode(asciiCode + 32);
                return `Input Uppercase: ${this.char}, Output Lowercase: ${lowerCase}`;
            }
            else {
                return "Input Value Is Not A Number Or Letter";
            }
        }
    }
    // Example usage
    try {
        const inputChar = prompt("Enter a single character:");
        if (inputChar) {
            const processor = new CharProcessor(inputChar);
            console.log(processor.processChar());
        }
        else {
            console.log("No input provided.");
        }
    }
    catch (error) {
        console.error(error.message);
    }
    // Block Scoping
}
