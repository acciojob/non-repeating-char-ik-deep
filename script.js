function firstNonRepeatedChar(str) {
 const charCount = new Map();

  // Count the occurrences of each character in the string
  for (let char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Find the first non-repeated character
  for (let char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
