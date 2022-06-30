
function twoArrayObject(arr1,arr2,) {
  let obj = {};
  for (let i = 0; i<arr1.length; i++) {
    arr2[i] === undefined ? obj[arr1[i]] = null :
    obj[arr1[i]] = arr2[i];
  }
  return obj;
}
