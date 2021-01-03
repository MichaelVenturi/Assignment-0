class MySolution {
  countDownSum(num) {
    // Insert code here;
    let sum = num;
    num--;
    if (num > 0) {
      sum += this.countDownSum(num);
    }
    return sum;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
