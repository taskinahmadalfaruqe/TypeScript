"use strict";
{
    // Block Scoping
    class WordCounter {
        constructor(sentence) {
            this.sentence = sentence;
        }
        countOccurrences(keyword) {
            let count = 0;
            this.sentence
                .toLocaleLowerCase()
                .split(" ")
                .forEach((word) => {
                if (word === keyword.toLocaleLowerCase()) {
                    count++;
                }
            });
            return count;
        }
    }
    // Example usage
    const wordCounter = new WordCounter("I love you love Love");
    console.log(wordCounter.countOccurrences("love")); // Output: 3
    // Block Scoping
}
