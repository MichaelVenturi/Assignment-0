function frequencyCounter(word) {
  // Insert code here;
  let frequency = {};
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (frequency[letter]) {
      frequency[letter]++;
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
}

// Do not edit this line;
module.exports = frequencyCounter;
