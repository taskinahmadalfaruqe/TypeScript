{
  // Block Scoping
  class WordCounter {
    private sentence: string;

    constructor(sentence: string) {
      this.sentence = sentence;
    }

    public countOccurrences(keyword: string): number {
      let count = 0;
      this.sentence
        .toLocaleLowerCase()
        .split(" ")
        .forEach((word: string) => {
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
