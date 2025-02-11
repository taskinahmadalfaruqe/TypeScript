{
  // Block Scoping
  function isPalindrome(s: string): boolean {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Check if it's a palindrome
    let left = 0;
    let right = cleanedStr.length - 1;

    while (left < right) {
      if (cleanedStr[left] !== cleanedStr[right]) {
        return false;
      }
      left++;
      right--;
    }

    return true;
  }

  // Example Usage
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
  console.log(isPalindrome("race a car")); // Output: false
  console.log(isPalindrome("")); // Output: true

  // Block Scoping
}
