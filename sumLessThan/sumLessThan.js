
function sumLessThan(nums,maxNum) {
  let sum = 0;
  for (num of nums) {
    if (num < maxNum) {
      sum += num;
    }
  }
  return sum;
}
