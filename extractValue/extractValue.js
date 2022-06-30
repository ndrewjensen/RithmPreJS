
function extractValue(arr, key) {
  let arr2 = arr.filter(obj => key in obj);
  let resultArr = [];
  for (let obj of arr2) {
    resultArr.push(obj[key]);
  }
  return resultArr;
}
