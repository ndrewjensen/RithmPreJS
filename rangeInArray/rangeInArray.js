
function rangeInArray(nums, start, end) {
  // Add any parameters you need. Good luck!
  let sum = 0;
  console.log("start is " + start + " and end is " + end);
  if (isNaN(start)) {
    start = 0;
  }
  
  isNaN(end) ? end = nums.length :
  end > nums.length ? end = nums.length :
  end < nums.length ? end +=1 :
  end === nums.length;

  console.log("start is " + start + " and end is " + end);
  for (let i = start; i < end; i++) {
    console.log("i is " + i);
    sum += nums[i];
    console.log(" at " + i + ", sum is " + sum);
  }
  return sum;
}
