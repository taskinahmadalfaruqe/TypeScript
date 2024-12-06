{
  // Block Scoping

  
  // Problem
  //   Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

  //   Example:

  //   Input: "I love typescript", "typescript"
  //   Output: 1
  //   // Sample Input:
  //   countWordOccurrences("I love typescript", "typescript");

  //   // Sample Output:
  //   1;

  // Solution
  const countWordOccurrences = (sentence: string, keywords: string): number => {
    let data = 0;
    sentence
      .toLocaleLowerCase()
      .split(" ")
      .filter((value: string) => {
        if (value === keywords.toLocaleLowerCase()) {
          data++;
        }
      });
    return data;
  };
  console.log(countWordOccurrences("I love you love Love", "love"));
  // Block Scoping
}
