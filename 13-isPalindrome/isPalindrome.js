function isPalindrome(word) {
  // Insert code here;
  let reverseWord = word.split("").reverse().join("");
  if (reverseWord === word) {
    return true;
  }
  return false;
}

// Do not edit this line;
module.exports = isPalindrome;
