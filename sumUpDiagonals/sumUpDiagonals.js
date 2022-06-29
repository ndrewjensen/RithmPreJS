
function sumUpDiagonals(arr) {
  let sum = 0;
  let n=arr.length-1;
  for (let i = 0; i<arr.length; i++) {
    console.log(arr[i][i],arr[i][n-i]);

    sum += (arr[i][i] + arr[i][n-i]);
  }
  return sum;
}