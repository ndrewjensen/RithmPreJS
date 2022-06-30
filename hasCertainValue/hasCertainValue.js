
function hasCertainValue(arr, key, val) {
  return arr.every(obj => obj[key]===val);
}
