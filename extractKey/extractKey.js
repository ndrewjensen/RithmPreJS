
function extractKey(arr, key) {
  let newArr = [];
  for (obj of arr) {
    newArr.push(obj[key])
  }
  return newArr;
}
