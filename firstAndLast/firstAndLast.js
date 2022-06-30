
function firstAndLast(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][0]+arr[i][arr[i].length-1]);
  }
  return newArr;
}
