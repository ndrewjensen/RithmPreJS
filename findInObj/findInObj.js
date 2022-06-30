
function findInObj(arr, key, val) {
  for (obj of arr) {
    if (obj[key]=== val)  {
      return obj;
    }
  }
  return undefined
}
