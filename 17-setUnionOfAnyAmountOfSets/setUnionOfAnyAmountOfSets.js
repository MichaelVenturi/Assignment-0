function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  const arr = [];
  for (const element of args) {
    element.forEach((x) => arr.push(x));
  }
  let union = new Set(arr);
  return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
