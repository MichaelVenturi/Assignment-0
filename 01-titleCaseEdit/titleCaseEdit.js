function titleCaseEdit(title) {
  // Insert code here;
  title = title
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1).toLowerCase())
    .join(" ");

  return title;
}

// Do not edit this line;
module.exports = titleCaseEdit;
