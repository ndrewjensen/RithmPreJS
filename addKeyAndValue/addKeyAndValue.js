
function addKeyAndValue(arr, key, val) {
  for (obj of arr) {
    obj[key]= val;
  }
  return arr;
}
